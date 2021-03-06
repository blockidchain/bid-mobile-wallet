module.exports = {
  _: {
    languageCode: 'zh-cn',
    storage_is_encrypted: '储存空间已加密。需要输入密码进行解密',
    enter_password: '输入密码',
    bad_password: '密码错误，请重试',
    never: '取消',
    continue: '继续',
    ok: '确认',
    click: '点击',
    here: '这里',
    save: '保存',
    confirm: '确认',
    copy: '负责',
    copied: '已复制！',
  },
  tabNavigator: {
    dashboard: '仪表盘',
    settings: '设置',
    addressBook: '地址簿',
  },
  message: {
    somethingWentWrong: '出问题了',
    somethingWentWrongWhileCreatingWallet: '钱包创建发生错误。请返回控制面板重新尝试。',
    success: '操作成功',
    successfullWalletImport: '您的钱包已成功导入。您现在可以返回控制面板。',
    successfullWalletDelete: '您的钱包已成功删除。您现在可以返回控制面板。',
    returnToDashboard: '返回控制面板',
    creatingWallet: '创建钱包',
    creatingWalletDescription: '创建钱包时请耐心等待。可能需要一些时间。',
  },
  onboarding: {
    onboarding: '初始设置',
    pin: 'PIN',
    createPin: '创建PIN',
    createNewPin: '新的PIN',
    createPassword: '创建交易密码',
    createPinDescription: '您的PIN将用于登录应用。您之后可在设置一栏更改。',
    confirmPin: '确认PIN',
    confirmNewPin: '确认新的PIN',
    confirmPassword: '确认交易密码',
    passwordDoesNotMatch: '密码不匹配，请输入有效的密码。',
    createPasswordDescription:
      '您的交易密码将用于验证所有交易。您之后将无法更改。交易密码必须包含至少8位字母数字字符。',
    changePin: '更改PIN',
    currentPin: '现用PIN',
    pinDoesNotMatch: 'PIN不匹配。请输入有效的PIN。',
    successDescription: '好极了！\n您已经成功创建了您的PIN。',
    successDescriptionChangedPin: '好极了！\n您已经成功修改了您的PIN。',
    successButton: '前往仪表盘',
    successButtonChangedPin: '返回设置',
  },
  unlock: {
    title: '解锁',
    touchID: 'Touch ID用于“BlockIdCoin Wallet”',
    confirmButton: '确认指纹以继续。',
    enter: '输入PIN',
  },
  unlockTransaction: { headerText: '确认交易', title: '确认交易密码', description: '确认交易密码以便进行交易。' },
  wallets: {
    dashboard: {
      title: '钱包',
      allWallets: '所有钱包',
      noWallets: '无钱包',
      noWalletsDesc1: '无钱包可展示。',
      noWalletsDesc2: '添加首个钱包。',
      send: '汇出比特币',
      receive: '接收比特币',
      noTransactions: '无交易可展示。',
    },
    walletModal: { btcv: '比特币Vault', wallets: '钱包' },
    importWallet: {
      title: '导入您的钱包',
      header: '导入钱包',
      subtitle: '请在此处写下您的助记词、WIF或者私钥等。BlockIdCoinWallet会尽力猜测正确的格式并导入您的钱包。',
      placeholder: '助记词、私钥、WIF',
      import: '导入',
      scanQrCode: '或扫描二维码',
      walletInUseValidationError: '钱包已使用。请输入有效的钱包。',
    },
    exportWallet: { title: '助记词', header: '退出钱包' },
    exportWalletXpub: { header: '钱包扩展公钥 (XPUB)' },
    deleteWallet: {
      title: '删除您的钱包',
      header: '删除钱包',
      description1: '是否确认删除',
      description2: '？删除后无法撤销。',
      no: '否',
      yes: '是',
    },
    wallet: { none: '取消', latest: '最新交易' },
    add: {
      title: '添加新的钱包',
      subtitle: '命名您的钱包',
      description: '请为您的新钱包输入名称。',
      inputLabel: '名称',
      addWalletButton: '添加新的钱包',
      importWalletButton: '导入钱包',
      advancedOptions: '高级选项',
      multipleAddresses: '多个地址',
      singleAddress: '单个地址',
      singleSegwitAddress: 'It contains a single native segwit address',
      singleLegacyAddress: 'It cointains a single legacy address',
      legacyAddress: 'It contains a tree of legacy addresses, generated from a single 24-word seed',      
      segwidAddress: '它包含一系列的由单一的24词种子生成的本地segwit地址',
    },
    addSuccess: {
      title: '添加新的钱包',
      subtitle: '操作成功',
      description:
        '您的钱包已创建。请花费一点时间在纸上写下这个助记词。这是您的备份。您可以在其它设备上使用备份来恢复钱包。',
      okButton: '好的，我写完了！',
    },
    details: {
      edit: '编辑',
      latestTransaction: '最新交易',
      typeLabel: '类型',
      nameLabel: '名称',
      exportWallet: '导出钱包',
      showWalletXPUB: '显示钱包扩展公钥 (XPUB)',
      deleteWallet: '删除钱包',
      nameEdit: '编辑名称',
    },
    export: { title: '钱包导出' },
    import: {
      title: '导入',
      explanation: '请在此处写下您的助记词、私钥、WIF等。BlockIdCoinWallet会尽力猜测正确的格式并导入您的钱包',
      imported: '已导入',
      error: '导入失败。请确认提供的数据有效。',
      success: '操作成功',
      do_import: '导入',
      scan_qr: '或扫描二维码？',
    },
    scanQrWif: {
      go_back: '返回',
      cancel: '取消',
      decoding: '解码',
      input_password: '输入密码',
      password_explain: '这是 BIP38 加密的私钥',
      bad_password: '密码错误',
      wallet_already_exists: '此钱包已存在',
      bad_wif: 'WIF错误',
      imported_wif: '已导入WIF',
      with_address: '和地址',
      imported_segwit: '已导入隔离见证',
      imported_legacy: '已导入Legacy',
      imported_watchonly: '已导入 Watch-only 监视钱包',
    },
  },
  transactions: {
    list: { conf: '确认' },
    details: {
      title: '交易',
      detailTitle: '交易详情',
      transactionHex: '十六进制字符串交易标识符',
      transactionHexDescription: '这是十六进制字符串交易标识符，已签名并准备发送到网络',
      copyAndBoriadcast: '稍后复制和发送',
      verify: '在 coinb.in 上验证',
      amount: '金额',
      fee: '手续费',
      txSize: '交易大小',
      satoshiPerByte: '每字节聪',
      from: '从',
      to: '到',
      bytes: '字节',
      copy: '复制',
      noLabel: '无标签',
      details: '详情',
      transactionId: '交易 ID',
      confirmations: '确认',
      transactionDetails: '交易详情',
      viewInBlockRxplorer: '在区块浏览器中查看',
      addNote: '添加备注',
      note: '备注',
      inputs: '输入',
      ouputs: '输出',
      sendCoins: '汇出币',
    },
  },
  send: {
    header: '汇出币',
    success: {
      title: '操作成功',
      description: '太好了！您已成功完成交易。',
      done: '完成',
      return: '返回控制面板',
    },
    details: {
      title: '创建交易',
      amount_field_is_not_valid: '金额字段无效',
      fee_field_is_not_valid: '手续费字段无效',
      address_field_is_not_valid: '地址字段无效',
      create_tx_error: '交易创建出现错误。请确保地址有效。',
      address: '地址',
      amount_placeholder: '汇款金额（比特币Vault）',
      fee_placeholder: '加上交易手续费（比特币Vault）',
      note_placeholder: '自我备注',
      cancel: '取消',
      scan: '扫描',
      send: '汇款',
      next: '下一个',
      note: '备注（可选）',
      to: '到',
      feeUnit: 'Sat/B',
      fee: '手续费：',
      create: '创建发票',
      remaining_balance: '余额',
      total_exceeds_balance: '汇出额超出可用余额。',
    },
    confirm: { sendNow: '立即汇出' },
    create: {
      amount: '金额',
      fee: '手续费',
      setTransactionFee: '设定交易手续费',
      headerText: '当网络上存在大量未处理交易时 (>1500)，较高的手续费可加快您的交易处理速度。典型值为 1-500 sat/b',
    },
  },
  receive: {
    header: '接收币',
    details: { amount: '金额', share: '分享', receiveWithAmount: '接收金额' },
  },
  settings: {
    language: '语言',
    general: '通用',
    security: '安全',
    about: '关于',
    electrumServer: 'Electrum 服务器',
    advancedOptions: '高级选项',
    changePin: '更改 PIN',
    fingerprintLogin: '指纹登录',
    aboutUs: '关于我们',
    header: '设置',
    notSupportedFingerPrint: '您的设备不支持指纹',
    TouchID: '允许指纹',
    FaceID: '允许FaceID',
    Biometrics: '允许生物特征',
  },
  aboutUs: {
    header: '关于我们',
    releaseNotes: '发行说明',
    runSelfTest: '运行自检',
    buildWithAwesome: '绝妙的架构：',
    rateBlockIdCoinWallet: '为 BlockIdCoinWallet 评分',
    goToOurGithub: '请访问我们的 Github',
    alwaysBackupYourKeys: '时刻备份您的秘钥',
    title: 'BlockIdCoin Wallet 是免费的开源比特币Vault钱包软件。由麻省理工授权。',
  },
  electrumServer: {
    header: 'Electrum 服务器',
    title: '更改electrum服务器',
    description: '您可以更改您的应用连接的服务器地址。推荐使用默认地址。',
    save: '保存',
    useDefault: '使用默认设置',
    host: '主机',
    port: '端口',
    successfullSave: '已成功保存更改。重启后，更改方可生效。',
    connectionError: '无法连接提供的 Electrum 浏览器',
  },
  advancedOptions: {
    title: '设置高级选项',
    description: '启用高级选项将允许您选择以下钱包类型：\nP2SH，HD P2SH，HD segwit。',
  },
  selectLanguage: {
    header: '语言',
    restartInfo: '重新选择一门新的语言后，请重启 BlockIdCoinWallet 以使更改生效',
    confirmation: '确认',
    confirm: '确认',
    alertDescription: '选择语言并重启应用程序？',
    cancel: '取消',
  },
  contactList: {
    cancel: '取消',
    search: '查询',
    screenTitle: '地址簿',
    noContacts: '无联系人',
    noContactsDesc1: '无联系人可展示。 \n点击',
    noContactsDesc2: '以添加首位联系人。',
    noResults: '无结果',
  },
  contactCreate: {
    screenTitle: '添加新的联系人',
    subtitle: '新联系人',
    description: '请输入您的新联系人姓名和地址。',
    nameLabel: '姓名',
    addressLabel: '地址',
    buttonLabel: '添加新的联系人',
    successTitle: '操作成功',
    successDescription: '太好了！您已成功添加新联系人。',
    successButton: '返回地址簿',
  },
  contactDetails: {
    nameLabel: '姓名',
    addressLabel: '地址',
    editName: '编辑姓名',
    editAddress: '编辑地址',
    sendCoinsButton: '汇出币',
    showQRCodeButton: '出示二维码',
    deleteButton: '删除联系人',
    share: '分享',
  },
  contactDelete: {
    title: '删除您的联系人',
    header: '删除联系人',
    description1: '是否确认删除',
    description2: '？\n删除后无法撤销。',
    no: '否',
    yes: '是',
    success: '操作成功',
    successDescription: '您的联系人已成功删除。\n您现在可以返回地址簿。',
    successButton: '返回地址簿',
  },
  scanQrCode: {
    permissionTitle: '允许使用相机',
    permissionMessage: '我们需要获取相机使用权限',
    ok: '确认',
    cancel: '取消',
  },
  filterTransactions: {
    header: '筛选交易',
    receive: '收到',
    send: '发送',
    filter: '筛选设置',
    to: '收款人',
    toAmount: '最大金额',
    toDate: '结束日期',
    from: '汇款人',
    fromAmount: '最小金额',
    fromDate: '起始日期',
    clearFilters: '清除筛选设置',
  },
};
