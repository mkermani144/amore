# amore
Consume some energy for the ones who matter to us.

## Deployer
Having a factory address of `FACTORY_ADDRESS`, suppose you want to generate an
address that ends with `ENDS_WITH`, and put a message `MESSAGE` into it. You can
do so this way:
```bash
node findAddress.js FACTORY_ADDRESS ENDS_WITH MESSAGE
HARDHAT_NETWORK=some-network node deployMessage.js FACTORY_ADDRESS TIME_SPENT NONCE MESSAGE
```

## Reader
Knowing your special address `MESSAGE_ADDRESS`, you can read it this way:
```bash
HARDHAT_NETWORK=some-network node readMessage.js MESSAGE_ADDRESS
```
