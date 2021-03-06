import AsyncStorage from '@react-native-community/async-storage';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { ScreenTemplate, Text, InputItem, Header, Button, FlatButton, RadioGroup, RadioButton } from 'app/components';
import { Route, Wallet, MainCardStackNavigatorParams, NavigationProp } from 'app/consts';
import { AppStorage, HDSegwitBech32Wallet, HDSegwitP2SHWallet, HDLegacyP2PKHWallet, LegacyWallet, SegwitBech32Wallet, SegwitP2SHWallet, BlueApp } from 'app/legacy';
import { ApplicationState } from 'app/state';
import { AppSettingsState } from 'app/state/appSettings/reducer';
import { loadWallets, WalletsActionType } from 'app/state/wallets/actions';
import { palette, typography } from 'app/styles';

import CreateWalletSuccessScreen from './CreateWalletSuccessScreen';

const i18n = require('../../loc');

interface Props {
  navigation: StackNavigationProp<MainCardStackNavigatorParams, Route.CreateWallet>;
  route: RouteProp<MainCardStackNavigatorParams, Route.CreateWallet>;
  appSettings: AppSettingsState;
  loadWallets: () => Promise<WalletsActionType>;
}

interface State {
  label: string;
  isLoading: boolean;
  isSuccess: boolean;
  activeBitcoin: boolean;
  isAdvancedOptionsEnabled: boolean;
  walletBaseURI: string;
  selectedIndex: number;
  secret: string[];
}

export class CreateWalletScreen extends React.PureComponent<Props, State> {
  state: State = {
    label: '',
    isLoading: false,
    isSuccess: false,
    activeBitcoin: false,
    isAdvancedOptionsEnabled: false,
    walletBaseURI: '',
    selectedIndex: 0,
    secret: [],
  };

  async componentDidMount() {
    let walletBaseURI = await AsyncStorage.getItem(AppStorage.LNDHUB);
    const { isAdvancedOptionsEnabled } = this.props.appSettings;
    walletBaseURI = walletBaseURI || '';

    this.setState({
      isLoading: false,
      activeBitcoin: true,
      label: '',
      isAdvancedOptionsEnabled,
      walletBaseURI,
    });
  }

  onSelect = (selectedIndex: number) =>
    this.setState({
      selectedIndex,
    });

  setLabel = (label: string) => this.setState({ label });

  navigateToImportWallet = () => this.props.navigation.navigate(Route.ImportWallet);
  navigateToCreateWallet = () => this.props.navigation.navigate(Route.CreateWallet);

  getWalletClassByIndex = (index: number) => {
    switch (index) {
      case 1:
        return LegacyWallet;        
      case 0:
        default:
        return HDLegacyP2PKHWallet;
    }
  };

  createWallet = async () => {
    const { selectedIndex, label } = this.state;
    this.setState({ isLoading: true });

    const WalletClass = this.getWalletClassByIndex(selectedIndex);

    const wallet = new WalletClass();

    wallet.setLabel(label || i18n.wallets.details.title);

    if (this.state.activeBitcoin) {
      await wallet.generate();
      BlueApp.wallets.push(wallet);
      await BlueApp.saveToDisk();
      this.props.loadWallets();
      this.setState({ isSuccess: true, secret: wallet.getSecret().split(' ') });
    }
    this.setState({ isLoading: false });
  };


  goToUnlockScreen = () => {
    this.props.navigation.navigate(Route.UnlockScreen, {
      onSuccess: this.navigateToCreateWallet && this.createWallet,
      goBack: true
    });
  };

  get canCreateWallet(): boolean {
    return this.state.activeBitcoin && !!this.state.label && !this.validationError;
  }

  get validationError(): string | undefined {
    const walletLabels = BlueApp.getWallets().map((wallet: Wallet) => wallet.label) || [];
    if (walletLabels.includes(this.state.label)) {
      return i18n.wallets.importWallet.walletInUseValidationError;
    }
  }

  render() {
    if (this.state.isSuccess) {
      return (
        <CreateWalletSuccessScreen
          secret={this.state.secret}
          navigation={this.props.navigation as NavigationProp<MainCardStackNavigatorParams, Route.CreateWallet>}
        />
      );
    }
    return (
      <ScreenTemplate
        footer={
          <>
            {this.state.isLoading && (
              <Text style={styles.isLoadingDescription}>{i18n.message.creatingWalletDescription}</Text>
            )}
            <Button
              disabled={!this.canCreateWallet}
              loading={this.state.isLoading}
              onPress={this.goToUnlockScreen}
              title={i18n.wallets.add.addWalletButton}
            />
            <FlatButton
              onPress={this.navigateToImportWallet}
              containerStyle={styles.importButtonContainer}
              title={i18n.wallets.add.importWalletButton}
            />
          </>
        }
        header={<Header navigation={this.props.navigation} isBackArrow title={i18n.wallets.add.title} />}
      >
        <Text style={styles.subtitle}>{i18n.wallets.add.subtitle}</Text>
        <Text style={styles.description}>{i18n.wallets.add.description}</Text>
        <InputItem error={this.validationError} setValue={this.setLabel} label={i18n.wallets.add.inputLabel} />
        <RadioGroup color={palette.secondary} onSelect={this.onSelect} selectedIndex={this.state.selectedIndex}>
          <RadioButton style={styles.radioButton} value={HDLegacyP2PKHWallet.type}>
            <View style={styles.radioButtonContent}>
              <Text style={styles.radioButtonTitle}>{HDLegacyP2PKHWallet.typeReadable}</Text>
              <Text style={styles.radioButtonSubtitle}>{i18n.wallets.add.legacyAddress}</Text>
            </View>
          </RadioButton>          
          <RadioButton style={styles.radioButton} value={LegacyWallet.type}>
            <View style={styles.radioButtonContent}>
              <Text style={styles.radioButtonTitle}>{LegacyWallet.typeReadable}</Text>
              <Text style={styles.radioButtonSubtitle}>{i18n.wallets.add.singleLegacyAddress}</Text>
            </View>
          </RadioButton>
        </RadioGroup>
      </ScreenTemplate>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  appSettings: state.appSettings,
});

const mapDispatchToProps = {
  loadWallets,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateWalletScreen);

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 12,
    marginBottom: 18,
    ...typography.headline4,
    textAlign: 'center',
  },
  description: {
    marginBottom: 52,
    color: palette.black,
    ...typography.caption,
    textAlign: 'center',
  },
  isLoadingDescription: {
    ...typography.caption,
    color: palette.black,
    textAlign: 'center',
    lineHeight: 19,
    flexGrow: 1,
    marginVertical: 10,
  },
  advancedOptionsLabel: {
    color: palette.black,
    marginBottom: 12,
  },
  radioButton: {
    paddingStart: 0,
    paddingVertical: 8,
  },
  radioButtonContent: {
    paddingStart: 10,
    top: -3,
  },
  radioButtonTitle: {
    ...typography.caption,
    marginBottom: 2,
    color: palette.secondary,
  },
  radioButtonSubtitle: {
    ...typography.overline,
    color: palette.black,
  },
  importButtonContainer: {
    marginTop: 12,
  },
});
