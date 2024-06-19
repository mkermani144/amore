const ethers = require("ethers");

const TheMessage = require("./artifacts/contracts/TheMessage.sol/TheMessage.json");

let nonce = 0;
const started = Date.now();

const factoryAddress = process.argv[2];
const endsWith = process.argv[3];

while (true) {
  const timeSpent = Date.now() - started;
  nonce++;
  const address = ethers.getCreate2Address(
    factoryAddress,
    "0x" + (nonce + timeSpent).toString(16).padStart(64, "0"),
    ethers.keccak256(
      `${TheMessage.bytecode}${ethers.AbiCoder.defaultAbiCoder()
        .encode(["string", "uint"], ["hello", timeSpent])
        .slice(2)}`
    )
  );

  if (address.endsWith(endsWith)) {
    console.log({ address, nonce, timeSpent });
    process.exit(0);
  }
}
