// // Create a wallet instance from a mnemonic...
// mnemonic = "announce room limb pattern dry unit scale effort smooth jazz weasel alcohol"
// walletMnemonic = Wallet.fromMnemonic(mnemonic)

// // ...or from a private key
// walletPrivateKey = new Wallet(walletMnemonic.privateKey)

// walletMnemonic.address === walletPrivateKey.address
// true

// // The address as a Promise per the Signer API
// await walletMnemonic.getAddress()
// // '0x71CB05EE1b1F506fF321Da3dac38f25c0c9ce6E1'

// // A Wallet address is also available synchronously
// walletMnemonic.address
// // '0x71CB05EE1b1F506fF321Da3dac38f25c0c9ce6E1'

// // The internal cryptographic components
// walletMnemonic.privateKey
// // '0x1da6847600b0ee25e9ad9a52abbd786dd2502fa4005dd5af9310b7cc7a3b25db'
// walletMnemonic.publicKey
// // '0x04b9e72dfd423bcf95b3801ac93f4392be5ff22143f9980eb78b3a860c4843bfd04829ae61cdba4b3b1978ac5fc64f5cc2f4350e35a108a9c9a92a81200a60cd64'

// // The wallet mnemonic
// walletMnemonic.mnemonic
// // {
// //   locale: 'en',
// //   path: "m/44'/60'/0'/0/0",
// //   phrase: 'announce room limb pattern dry unit scale effort smooth jazz weasel alcohol'
// // }

// // Note: A wallet created with a private key does not
// //       have a mnemonic (the derivation prevents it)
// walletPrivateKey.mnemonic
// // null

// // Signing a message
// await walletMnemonic.signMessage("Hello World")
// // '0x14280e5885a19f60e536de50097e96e3738c7acae4e9e62d67272d794b8127d31c03d9cd59781d4ee31fb4e1b893bd9b020ec67dfa65cfb51e2bdadbb1de26d91c'

// tx = {
//   to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
//   value: utils.parseEther("1.0")
// }

// // Signing a transaction
// await walletMnemonic.signTransaction(tx)
// // '0xf865808080948ba1f109551bd432803012645ac136ddd64dba72880de0b6b3a7640000801ca0918e294306d177ab7bd664f5e141436563854ebe0a3e523b9690b4922bbb52b8a01181612cec9c431c4257a79b8c9f0c980a2c49bb5a0e6ac52949163eeb565dfc'

// // The connect method returns a new instance of the
// // Wallet connected to a provider
// wallet = walletMnemonic.connect(provider)

// // Querying the network
// await wallet.getBalance();
// // { BigNumber: "6846" }
// await wallet.getTransactionCount();
// // 3

// // Sending ether
// await wallet.sendTransaction(tx)
// // {
// //   accessList: [],
// //   chainId: 123456,
// //   confirmations: 0,
// //   data: '0x',
// //   from: '0x46E0726Ef145d92DEA66D38797CF51901701926e',
// //   gasLimit: { BigNumber: "21000" },
// //   gasPrice: null,
// //   hash: '0x1c4913f6e06a8b48443dbe3169acb6701b558ed6d3b478723eb6b137d2418792',
// //   maxFeePerGas: { BigNumber: "1500000014" },
// //   maxPriorityFeePerGas: { BigNumber: "1500000000" },
// //   nonce: 5,
// //   r: '0xb58e9234bf734f5bab14634ca21e35c3fa163562930d782424e78120cfcc9b8f',
// //   s: '0x690c4b1c3d2b6e519340b2f0f3fc80ccea47e3c2a077f9771aaa2e1d7552aa24',
// //   to: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
// //   type: 2,
// //   v: 0,
// //   value: { BigNumber: "1000000000000000000" },
// //   wait: [Function (anonymous)]
// // }


// module.exports = {
//     walletPrivateKey,
//     Binformation
//   };
  