require('dotenv').config();
const ethers = require('ethers');

const contractObj = require('../build/contracts/MyErc20.json')

async function deploy(env) {
    let factory = new ethers.ContractFactory(contractObj.abi, contractObj.bytecode, env.wallet);
    let contract = await factory.deploy();
    await contract.deployed();
    console.log("✓ Contract deployed:", contractObj.contractName, contract.address);
    return contract.address;
}

async function main() {
    let env = {};
    env.rpcUrl = process.env.RPC_URL || 'http://127.0.0.1:8545';
    env.privateKey = process.env.PRIVATE_KEY;
    env.provider = new ethers.providers.JsonRpcProvider(env.rpcUrl);
    env.wallet = new ethers.Wallet(env.privateKey, env.provider);

    console.log({ 'rpcURL': env.rpcUrl, 'deployer': env.wallet.address });

    let tx = await deploy(env);
}

main()
    .catch(console.error)
    .finally(() => process.exit());