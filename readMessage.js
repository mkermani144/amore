const { ethers } = require("hardhat");
const box = require("ascii-box").box;

const main = async () => {
  const messageAddress = process.argv[2];

  const TheMessage = await ethers.getContractFactory("TheMessage");
  const theMessage = await TheMessage.attach(messageAddress);

  const message = await theMessage.getMessage();
  const timeSpent = await theMessage.getTimeSpent();

  console.log("This is the message:\n");
  console.log(box(message));
  console.log(
    `\nAround ${
      timeSpent / 1000n
    } seconds of CPU time was spent to generate this address`
  );
};

main();
