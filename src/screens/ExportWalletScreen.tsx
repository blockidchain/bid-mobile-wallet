import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { Header, Chip, ScreenTemplate } from 'app/components';
import { RootStackParams, Route } from 'app/consts';
import { typography, palette } from 'app/styles';

const i18n = require('../../loc');

interface Props {
  navigation: StackNavigationProp<RootStackParams, Route.ExportWallet>;
  route: RouteProp<RootStackParams, Route.ExportWallet>;
}

export const ExportWalletScreen = ({ route, navigation }: Props) => {
  const { wallet } = route.params;
  const secret = wallet.getSecret();

  return (
    <ScreenTemplate
      header={<Header navigation={navigation} isBackArrow title={i18n.wallets.exportWallet.header} />}
    >
      <Text style={styles.title}>{i18n.wallets.exportWallet.title}</Text>
      <View style={styles.qrCodeContainer}>
        {secret && <QRCode quietZone={10} value={secret} size={140} ecl={'H'} />}
      </View>
      <View style={styles.mnemonicPhraseContainer}>
        {secret.split(' ').map((singleSecret, index) => (
          <Chip key={index.toString()} label={`${index + 1}. ${singleSecret}`} />
        ))}
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  qrCodeContainer: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  title: { ...typography.headline4,color: palette.black, textAlign: 'center' },
  mnemonicPhraseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
});
