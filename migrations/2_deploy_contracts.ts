const IPFS = require('ipfs-http-client');
const SimpleSettleMintCoin = artifacts.require('SimpleSettleMintCoin');
// tslint:disable:no-var-requires
const pinataSDK = require('@pinata/sdk');
const uiDefinitions = require('../contracts/UIDefinitions.json');
const {storeIpfsHash} = require('../truffle-config.js'); // two dirs up, because it is compiled into ./dist/migrations


export async function storeIpfsHashOld(data: any) {
    const pinata = pinataSDK('a6b554c7329cb1e7a7c6', '0380624d42ec4723b552db9e797b24c0300b68c3e304b4c988253ddb426f36ce');
    const {IpfsHash} = await pinata.pinJSONToIPFS(data);

    console.log(`--> Stored a file on IPFS: ${IpfsHash}`);
    return IpfsHash;
}

module.exports = async (deployer: Truffle.Deployer, network: string, accounts: string[]) => {
    const hash = await storeIpfsHash(uiDefinitions);
    //const hash = await storeIpfsHashOld(uiDefinitions);
    await deployer.deploy(SimpleSettleMintCoin);
    const deployedSMC = await SimpleSettleMintCoin.deployed();
    await deployedSMC.setUIFieldDefinitionsHash(hash);
};
