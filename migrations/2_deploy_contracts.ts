const SimpleSettleMintCoin = artifacts.require('SimpleSettleMintCoin');

module.exports = async (
  deployer: Truffle.Deployer,
  network: string,
  accounts: string[]
) => deployer.deploy(SimpleSettleMintCoin);
