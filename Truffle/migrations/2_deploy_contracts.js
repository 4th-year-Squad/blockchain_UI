const MedicalChain = artifacts.require("MedicalChain.sol");

module.exports = function (deployer) {
  deployer.deploy(MedicalChain);
};
