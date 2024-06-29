const { ethers } = require("hardhat");

const main = async () => {
  const factoryAddress = process.argv[2];
  const timeSpent = process.argv[3];
  const nonce = process.argv[4];
  const message = process.argv[5];

  const LoveFactory = await ethers.getContractFactory("LoveFactory");
  const loveFactory = await LoveFactory.attach(factoryAddress);

  const result = await loveFactory.deploy(
    message,
    +timeSpent,
    ethers.toBeHex(BigInt(timeSpent) + BigInt(nonce)),
  );

  const waitedResult = await result.wait();

  console.log(waitedResult);
};

main();
