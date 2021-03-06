module.exports = {
  _: {
    languageCode: 'en',
    storage_is_encrypted: 'Your storage is encrypted. Password is required to decrypt it',
    enter_password: 'Enter password',
    bad_password: 'Bad password, try again',
    never: 'never',
    continue: 'Continue',
    ok: 'OK',
    click: 'Click',
    here: 'here',
    save: 'Save',
    confirm: 'Confirm',
    copy: 'Copy',
    copied: 'Copied!',
  },
  tabNavigator: {
    dashboard: 'Dashboard',
    settings: 'Settings',
    addressBook: 'Address book',
  },
  message: {
    somethingWentWrong: 'Something went wrong',
    somethingWentWrongWhileCreatingWallet:
      'Something went wrong while we were creating your wallet. Please return to Dashboard and try again.',
    success: 'Success',
    successfullWalletImport: 'Your wallet has been successfully imported. You can now return to Dashboard.',
    successfullWalletDelete: 'Your wallet has been successfully deleted. You can now return to Dashboard.',
    returnToDashboard: 'Return to Dashboard',
    creatingWallet: 'Creating your wallet',
    creatingWalletDescription: 'Please be patient while we create your wallet. It may take a while.',
  },
  onboarding: {
    onboarding: 'Onboarding',
    pin: 'PIN',
    createPin: 'Create PIN',
    createNewPin: 'New PIN',
    createPassword: 'Create transaction password',
    createPinDescription:
      'Your PIN will be used to log in to the application. You can change it later in the Settings section.',
    confirmPin: 'Confirm PIN',
    confirmNewPin: 'Confirm new PIN',
    confirmPassword: 'Confirm transaction password',
    passwordDoesNotMatch: 'Password does not match. Please enter a valid password.',
    createPasswordDescription:
      'Your Transaction Password will be used to verify all of the transactions. You cannot change it later. Transaction Password must contain at least 8 alphanumerical characters.',
    changePin: 'Change PIN',
    currentPin: 'Current PIN',
    pinDoesNotMatch: 'PIN does not match. Please enter a valid PIN.',
    successDescription: 'Hooray! \n You have successfully created your PIN.',
    successDescriptionChangedPin: 'Hooray! \n You have successfully changed your PIN.',
    successButton: 'Go to Dashboard',
    successButtonChangedPin: 'Go back to Settings',
  },
  unlock: {
    title: 'Unlock',
    touchID: 'Touch ID for "BlockIdCoin Wallet"',
    confirmButton: 'Confirm fingerprint to continue.',
    enter: 'Enter PIN',
  },
  unlockTransaction: {
    headerText: 'Confirm transaction',
    title: 'Confirm Transaction Password',
    description: 'Confirm Transaction Password in order to proceed the transaction.',
  },
  wallets: {
    dashboard: {
      title: 'Wallets',
      allWallets: 'All wallets',
      noWallets: 'No wallets',
      noWalletsDesc1: 'No wallets to show.',
      noWalletsDesc2: 'to add your first wallet.',
      send: 'Send coins',
      receive: 'Receive coins',
      noTransactions: 'No transactions to show.',
    },
    walletModal: {
      btcv: 'BID',
      wallets: 'Wallets',
    },
    importWallet: {
      title: 'Import your wallet',
      header: 'Import wallet',
      subtitle:
        "Write here your mnemonic, private key, WIF or anything you've got. BlockIdCoinWallet will do its best to guess the correct format and import you wallet.",
      placeholder: 'Mnemonic, private key, WIF',
      import: 'Import',
      scanQrCode: 'or scan QR code',
      walletInUseValidationError: 'Wallet is already in use. Please enter a valid wallet.',
    },
    exportWallet: {
      title: 'Mnemonic phrase',
      header: 'Export wallet',
    },
    exportWalletXpub: {
      header: 'Wallet XPUB',
    },
    deleteWallet: {
      title: 'Delete your wallet',
      header: 'Delete wallet',
      description1: 'Are you sure you want to delete',
      description2: "? You can't undone it.",
      no: 'No',
      yes: 'Yes',
    },
    wallet: {
      none: 'None',
      latest: 'Latest transaction',
    },

    add: {
      title: 'Add new wallet',
      subtitle: 'Name your wallet',
      description: 'Please enter name for your new wallet.',
      inputLabel: 'Name',
      addWalletButton: 'Add new wallet',
      importWalletButton: 'Import wallet',
      advancedOptions: 'Advanced options',
      multipleAddresses: 'It contains a tree of P2SH addresses generated from a single 24-word seed',
      singleAddress: 'It contains a single P2SH address',
      singleSegwitAddress: 'It contains a single native segwit address',
      singleLegacyAddress: 'It cointains a single legacy address',
      legacyAddress: 'It contains a tree of legacy addresses, generated from a single 24-word seed',
      segwidAddress: 'It contains a tree of native segwit addresses, generated from a single 24-word seed',
    },
    addSuccess: {
      title: 'Add new wallet',
      subtitle: 'Success',
      description:
        'Your wallet has been created. Please take a moment to write down this mnemonic phrase on a piece of paper. It’s your backup. You can use it to restore the wallet on other devices.',
      okButton: 'OK, I wrote this down!',
    },
    details: {
      edit: 'Edit',
      latestTransaction: 'Latest transaction',
      typeLabel: 'Type',
      nameLabel: 'Name',
      exportWallet: 'Export wallet',
      showWalletXPUB: 'Show wallet XPUB',
      deleteWallet: 'Delete wallet',
      nameEdit: 'Edit name',
    },
    export: {
      title: 'wallet export',
    },
    import: {
      title: 'import',
      explanation:
        "Write here your mnemonic, private key, WIF, or anything you've got. BlockIdCoinWallet will do its best to guess the correct format and import your wallet",
      imported: 'Imported',
      error: 'Failed to import. Please, make sure that the provided data is valid.',
      success: 'Success',
      do_import: 'Import',
      scan_qr: 'or scan QR code instead?',
    },
    scanQrWif: {
      go_back: 'Go Back',
      cancel: 'Cancel',
      decoding: 'Decoding',
      input_password: 'Input password',
      password_explain: 'This is BIP38 encrypted private key',
      bad_password: 'Bad password',
      wallet_already_exists: 'Such wallet already exists',
      bad_wif: 'Bad WIF',
      imported_wif: 'Imported WIF',
      with_address: 'with address',
      imported_segwit: 'Imported SegWit',
      imported_legacy: 'Imported Legacy',
      imported_watchonly: 'Imported Watch-only',
    },
  },
  transactions: {
    list: {
      conf: 'Confirmations',
    },
    details: {
      title: 'Transaction',
      detailTitle: 'Transaction details',
      transactionHex: 'Transaction hex',
      transactionHexDescription: 'This is transaction hex, signed and ready to be broadcast to the network',
      copyAndBoriadcast: 'Copy and broadcast later',
      verify: 'Verify on coinb.in',
      amount: 'Amount',
      fee: 'Fee',
      txSize: 'TX size',
      satoshiPerByte: 'Satoshi per byte',
      from: 'From',
      to: 'To',
      bytes: 'bytes',
      copy: 'Copy',
      noLabel: 'No label',
      details: 'Details',
      transactionId: 'Transaction ID',
      confirmations: 'confirmations',
      transactionDetails: 'Transaction details',
      viewInBlockRxplorer: 'View in block explorer',
      addNote: 'Add note',
      note: 'Note',
      inputs: 'Inputs',
      ouputs: 'Outputs',
      sendCoins: 'Send coins',
    },
  },
  send: {
    header: 'Send coins',
    success: {
      title: 'Success',
      description: 'Hooray! You have successfully finished the transaction.',
      done: 'Done',
      return: 'Return to Dashboard',
    },
    details: {
      title: 'create transaction',
      amount_field_is_not_valid: 'Amount field is not valid',
      fee_field_is_not_valid: 'Fee field is not valid',
      address_field_is_not_valid: 'Address field is not valid',
      create_tx_error: 'There was an error creating the transaction. Please, make sure the address is valid.',
      address: 'address',
      amount_placeholder: 'amount to send (in BID)',
      fee_placeholder: 'plus transaction fee (in BID)',
      note_placeholder: 'note to self',
      cancel: 'Cancel',
      scan: 'Scan',
      send: 'Send',
      next: 'Next',
      note: 'Note (optional)',
      to: 'to',
      feeUnit: 'Sat/B',
      fee: 'Fee:',
      create: 'Create Invoice',
      remaining_balance: 'Remaining balance',
      total_exceeds_balance: 'The sending amount exceeds the available balance.',
    },
    confirm: {
      sendNow: 'Send now',
    },
    create: {
      amount: 'Amount',
      fee: 'Fee',
      setTransactionFee: 'Set a transaction fee',
      headerText:
        'When there is a large number of pending transaction on the network (>1500), the higher fee will result in your transaction being processed faster. The typical values are 1-500 sat/b',
    },
  },
  receive: {
    header: 'Receive coins',
    details: {
      amount: 'Amount',
      share: 'Share',
      receiveWithAmount: 'Receive with amount',
    },
  },
  settings: {
    language: 'Language',
    general: 'General',
    security: 'Security',
    about: 'About',
    electrumServer: 'Electrum server',
    advancedOptions: 'Advanced options',
    changePin: 'Change PIN',
    fingerprintLogin: 'Fingerprint login',
    aboutUs: 'About us',
    header: 'Settings',
    notSupportedFingerPrint: 'Your device does not support fingerprint',
    TouchID: 'Allow fingerprint',
    FaceID: 'Allow FaceID',
    Biometrics: 'Allow biometrics',
  },
  aboutUs: {
    header: 'About us',
    releaseNotes: 'Release notes',
    runSelfTest: 'Run self test',
    buildWithAwesome: 'Build with awesome:',
    rateBlockIdCoinWallet: 'Rate BlockIdCoinWallet',
    goToOurGithub: 'Go to our Github',
    alwaysBackupYourKeys: 'Always backup your keys',
    title: 'BlockIdCoin Wallet is a free and open source Cortez Vault wallet. Licensed MIT.',
  },
  electrumServer: {
    header: 'Electrum server',
    title: 'Change electrum server',
    description:
      'You can change the address of the server your application will connect to. Default address is recommended.',
    save: 'Save',
    useDefault: 'Use default',
    host: 'host',
    port: 'port',
    successfullSave: 'Your changes have been saved successfully. Restart may be required for changes to take effect.',
    connectionError: "Can't connect to provided Electrum server",
  },
  advancedOptions: {
    title: 'Configure advanced options',
    description:
      'Enabling Advanced options will allow you to choose from wallet types listed below: \nP2SH, HD P2SH, HD segwit.',
  },
  selectLanguage: {
    header: 'Language',
    restartInfo: 'When selecting a new language, restarting BlockIdCoinWallet may be required for the change to take effect',
    confirmation: 'Confirmation',
    confirm: 'Confirm',
    alertDescription: 'Select language and restart the application?',
    cancel: 'Cancel',
  },
  contactList: {
    cancel: 'Cancel',
    search: 'Search',
    screenTitle: 'Address book',
    noContacts: 'No contacts',
    noContactsDesc1: 'No contacts to show. \n Click',
    noContactsDesc2: 'to add your first contact.',
    noResults: 'No results for',
  },
  contactCreate: {
    screenTitle: 'Add new contact',
    subtitle: 'New contact',
    description: 'Please enter name and address\nfor your new contact.',
    nameLabel: 'Name',
    addressLabel: 'Address',
    buttonLabel: 'Add new contact',
    successTitle: 'Success',
    successDescription: 'Hooray! You have successfully\nadded your contact.',
    successButton: 'Return to Address book',
  },
  contactDetails: {
    nameLabel: 'Name',
    addressLabel: 'Address',
    editName: 'Edit name',
    editAddress: 'Edit address',
    sendCoinsButton: 'Send coins',
    showQRCodeButton: 'Show QR code',
    deleteButton: 'Delete contact',
    share: 'Share',
  },
  contactDelete: {
    title: 'Delete your contact',
    header: 'Delete contact',
    description1: 'Are you sure you want to delete',
    description2: "?\nYou can't undone it.",
    no: 'No',
    yes: 'Yes',
    success: 'Success',
    successDescription: 'Your contact has been successfully deleted.\nYou can now return to Address book.',
    successButton: 'Return to Address book',
  },
  scanQrCode: {
    permissionTitle: 'Permission to use camera',
    permissionMessage: 'We need your permission to use your camera',
    ok: 'Ok',
    cancel: 'Cancel',
  },
  filterTransactions: {
    header: 'Filter transactions',
    receive: 'Receive',
    send: 'Send',
    filter: 'Filter',
    to: 'To',
    toAmount: 'To amount',
    toDate: 'To date',
    from: 'From',
    fromAmount: 'From amount',
    fromDate: 'From date',
    clearFilters: 'Clear filters',
  },
};
