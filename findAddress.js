const ethers = require("ethers");

const TheMessage = require("./artifacts/contracts/TheMessage.sol/TheMessage.json");

let nonce = 0n;
const started = Date.now();

const factoryAddress = process.argv[2];
const endsWith = process.argv[3];
const message = process.argv[4];

const TheMessageInterface = new ethers.Interface(TheMessage.abi);

while (true) {
  const timeSpent = Date.now() - started;
  nonce++;
  const address = ethers.getCreate2Address(
    factoryAddress,
    ethers.toBeHex(nonce + BigInt(timeSpent)),
    ethers.keccak256(
      `${TheMessage.bytecode}${TheMessageInterface.encodeDeploy([
        message,
        timeSpent,
      ]).slice(2)}`
    )
  );

  if (address.endsWith(endsWith)) {
    console.log({ address, nonce, timeSpent });
    process.exit(0);
  }
}
