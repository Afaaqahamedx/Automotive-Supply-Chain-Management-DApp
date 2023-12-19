var SupplyChainContract = artifacts.require("./SupplyChain.sol");
var RolesContract = artifacts.require("./rolesUtils/Roles.sol");
var ManufacturerContract = artifacts.require("./rolesUtils/Manufacturer.sol");
var AutodealerContract = artifacts.require("./rolesUtils/Autodealer.sol");
var CustomerContract = artifacts.require("./rolesUtils/Customer.sol");
var LogisticsCompanyContract = artifacts.require("./rolesUtils/LogisticsCompany.sol");

module.exports = function(deployer) {
  deployer.deploy(ManufacturerContract);
  deployer.deploy(RolesContract);
  deployer.deploy(SupplyChainContract);
  deployer.deploy(AutodealerContract);
  deployer.deploy(CustomerContract);
  deployer.deploy(LogisticsCompanyContract);
};