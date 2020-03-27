const Migrations = artifacts.require('Migrations');

module.exports = async (
  deployer: Truffle.Deployer,
  network: string,
  accounts: string[]
) => deployer.deploy(Migrations);
