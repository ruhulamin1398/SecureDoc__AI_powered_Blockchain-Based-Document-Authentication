require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/WNRNShwe2lr7OgY5_9ugyyEjNYQagosw',
      accounts: ['20cec08faea52eb9f022ab7c0f79224d6fe8c1594e3126d6367a3c669080f33a'],
    },
  },
};