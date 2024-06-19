const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LoveFactoryModule", (m) => {
  const loveFactory = m.contract("LoveFactory");

  return { loveFactory };
});
