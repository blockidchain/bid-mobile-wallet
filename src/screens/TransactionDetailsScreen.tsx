import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import moment from 'moment';
import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { images } from 'app/assets';
import { Image, Header, StyledText, Chip, ScreenTemplate } from 'app/components';
import { CopyButton } from 'app/components/CopyButton';
import { Route, MainCardStackNavigatorParamList, RootStackParamList } from 'app/consts';
import { ApplicationState } from 'app/state';
import {
  createTransactionNote,
  updateTransactionNote,
  CreateTransactionNoteAction,
  UpdateTransactionNoteAction,
} from 'app/state/transactions/actions';
import { typography, palette } from 'app/styles';

import BlueApp from '../../BlueApp';

const i18n = require('../../loc');

function onlyUnique(value: number, index: number, self: any[]) {
  return self.indexOf(value) === index;
}

function arrDiff(a1: any[], a2: any[]) {
  const ret = [];
  for (const v of a2) {
    if (a1.indexOf(v) === -1) {
      ret.push(v);
    }
  }
  return ret;
}

interface Props {
  transactionNotes: Record<string, string>;
  createTransactionNote: (transactionID: string, note: string) => CreateTransactionNoteAction;
  updateTransactionNote: (transactionID: string, note: string) => UpdateTransactionNoteAction;
  navigation: CompositeNavigationProp<
    StackNavigationProp<RootStackParamList, Route.MainCardStackNavigator>,
    StackNavigationProp<MainCardStackNavigatorParamList, Route.TransactionDetails>
  >;

  route: RouteProp<MainCardStackNavigatorParamList, Route.TransactionDetails>;
}

interface State {
  hash: string;
  isLoading: boolean;
  tx: any;
  from: any[];
  to: any[];
  wallet: any;
  note: string;
}

class TransactionDetailsScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const {
      transaction: { txid, hash },
    } = props.route.params;

    const note = props.transactionNotes[txid] || '';

    let foundTx = {};
    let from = [];
    let to = [];
    for (const tx of BlueApp.getTransactions()) {
      if (tx.hash === hash) {
        foundTx = tx;
        for (const input of foundTx.inputs) {
          from = from.concat(input.addresses);
        }
        for (const output of foundTx.outputs) {
          if (output.addresses) to = to.concat(output.addresses);
          if (output.scriptPubKey && output.scriptPubKey.addresses) to = to.concat(output.scriptPubKey.addresses);
        }
      }
    }

    let wallet = false;
    for (const w of BlueApp.getWallets()) {
      for (const t of w.getTransactions()) {
        if (t.hash === hash) {
          wallet = w;
        }
      }
    }
    this.state = {
      hash,
      isLoading: true,
      tx: foundTx,
      from,
      to,
      wallet,
      note,
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  sendCoins = () => {
    const { wallet } = this.state;

    this.props.navigation.navigate(Route.SendCoins, {
      fromAddress: wallet.getAddress(),
      fromSecret: wallet.getSecret(),
      fromWallet: wallet,
      toAddress: this.state.from.filter(onlyUnique).join(', '),
    });
  };

  updateNote = (note: string) => {
    const {
      transaction: { txid },
    } = this.props.route.params;
    if (!this.state.note) {
      this.props.createTransactionNote(txid, note);
    } else {
      this.props.updateTransactionNote(txid, note);
    }

    this.setState({
      note,
    });
  };

  renderHeader = () => {
    const { transaction } = this.props.route.params;
    const valuePreffix = transaction.value < 0 ? '' : '+';
    return (
      <View style={styles.headerContainer}>
        <Image source={transaction.value < 0 ? images.bigMinus : images.bigPlus} style={styles.image} />
        <Text style={styles.walletLabel}>{transaction.walletLabel}</Text>
        <Text style={[styles.value, { color: transaction.value < 0 ? palette.textRed : palette.textGreen }]}>
          {`${valuePreffix}${i18n.formatBalanceWithoutSuffix(
            Number(transaction.value),
            transaction.walletPreferredBalanceUnit,
          )} ${transaction.walletPreferredBalanceUnit}`}
        </Text>
        <Chip
          label={`${transaction.confirmations < 7 ? transaction.confirmations : '6'} ${
            i18n.transactions.details.confirmations
          }`}
          textStyle={typography.overline}
        />
      </View>
    );
  };

  editNote = () => {
    const { transaction } = this.props.route.params;
    this.props.navigation.navigate(Route.EditText, {
      title: moment.unix(transaction.time).format('lll'),
      label: i18n.transactions.details.note,
      onSave: this.updateNote,
      value: this.state.note,
      header: this.renderHeader(),
    });
  };

  render() {
    const { transaction } = this.props.route.params;
    const fromValue = this.state.from.filter(onlyUnique).join(', ');
    const toValue = arrDiff(this.state.from, this.state.to.filter(onlyUnique)).join(', ');
    return (
      <ScreenTemplate
        header={
          <Header navigation={this.props.navigation} isBackArrow title={moment.unix(transaction.time).format('lll')} />
        }
      >
        {this.renderHeader()}

        {this.state.note ? (
          <TouchableOpacity style={styles.noteContainer} onPress={this.editNote}>
            <Text style={styles.contentRowTitle}>{i18n.transactions.details.note}</Text>
            <Text style={styles.contentRowBody}>{this.state.note}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.headerContainer}>
            <StyledText title={i18n.transactions.details.addNote} onPress={this.editNote} />
          </View>
        )}
        <View style={styles.contentRowContainer}>
          <View style={styles.row}>
            <Text style={styles.contentRowTitle}>{i18n.transactions.details.from}</Text>
            <CopyButton textToCopy={fromValue.split(',')[0]} />
          </View>
          <Text style={styles.contentRowBody}>{fromValue}</Text>
          <StyledText title={i18n.transactions.details.sendCoins} onPress={this.sendCoins} />
        </View>
        <View style={styles.contentRowContainer}>
          <View style={styles.row}>
            <Text style={styles.contentRowTitle}>{i18n.transactions.details.to}</Text>
            <CopyButton textToCopy={toValue.split(',')[0]} />
          </View>
          <Text style={styles.contentRowBody}>{toValue}</Text>
        </View>
        <View style={styles.contentRowContainer}>
          <View style={styles.row}>
            <Text style={styles.contentRowTitle}>{i18n.transactions.details.transactionId}</Text>
            <CopyButton textToCopy={this.state.tx.txid} />
          </View>
          <Text style={styles.contentRowBody}>{this.state.tx.txid}</Text>
          <StyledText
            title={i18n.transactions.details.viewInBlockRxplorer}
            onPress={() => {
              const url = `https://bid.cryptoscope.cc/tx/?txid=${this.state.tx.txid}`;
              Linking.canOpenURL(url).then(supported => {
                if (supported) {
                  Linking.openURL(url);
                }
              });
            }}
          />
        </View>
        <View style={styles.contentRowContainer}>
          <Text style={styles.contentRowTitle}>{i18n.transactions.details.inputs}</Text>
          <Text style={styles.contentRowBody}>{transaction.inputs.length}</Text>
        </View>
        <View style={styles.contentRowContainer}>
          <Text style={styles.contentRowTitle}>{i18n.transactions.details.ouputs}</Text>
          <Text style={styles.contentRowBody}>{transaction.outputs.length}</Text>
        </View>
      </ScreenTemplate>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  transactionNotes: state.transactions.transactionNotes,
});

const mapDispatchToProps = {
  createTransactionNote,
  updateTransactionNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionDetailsScreen);

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 13,
  },
  walletLabel: {
    color: palette.textOrange,
    ...typography.headline8,
  },
  value: { ...typography.headline5, marginTop: 6, marginBottom: 10 },
  image: {
    height: 90,
    width: 90,
    margin: 15,
  },
  noteContainer: {
    width: '100%',
    alignSelf: 'flex-start',
    borderBottomColor: palette.border,
    borderBottomWidth: 1,
    paddingBottom: 2,
    marginBottom: 13,
  },
  contentRowContainer: { marginVertical: 14 },
  contentRowTitle: { ...typography.overline, color: palette.black },
  contentRowBody: { ...typography.caption, marginTop: 4, marginBottom: 3, color: palette.textBlackMuted },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
});
