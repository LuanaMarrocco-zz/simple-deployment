const IPFS = require('ipfs-http-client');
const SimpleSettleMintCoin = artifacts.require('SimpleSettleMintCoin');
const uiDefinitions = require('../contracts/UIDefinitions.json');
const {storeIpfsHash} = require('../truffle-config.js'); // two dirs up, because it is compiled into ./dist/migrations


module.exports = async (deployer: Truffle.Deployer, network: string, accounts: string[]) => {
    const hash = await storeIpfsHash(uiDefinitions);
    await deployer.deploy(SimpleSettleMintCoin);
    const deployedSMC = await SimpleSettleMintCoin.deployed();
    await deployedSMC.setUIFieldDefinitionsHash(hash);
};
