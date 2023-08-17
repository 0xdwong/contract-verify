require('dotenv').config();
const ethers = require('ethers');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const MNEMONIC = process.env.MNEMONIC;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, 'https://ethereum-goerli.publicnode.com'),
      network_id: 5,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.8.19",   
      settings: {
       optimizer: {
         enabled: true,
         runs: 200
       }
      }
    }
  },
  plugins: [
    'truffle-contract-size',
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: ETHERSCAN_KEY
  },
  db: {
    enabled: false
  },
  verify: {
    proxy: {
     host: '127.0.0.1',
     port: '1087'
   }
  }
};