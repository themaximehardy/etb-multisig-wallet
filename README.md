# Multisig Wallet on ETH

Multisignature (multisig) wallets are smart contracts that allow multiple signers to review and agree on an action on the blockchain before the action is executed. For example, a multisig wallet could be used to control ETH, or a smart contract, requiring signatures from at least M of N total signers to execute the action. More generally, it is a type of decentralized governance.

## Installation

Install the npm packages

```bash
npm install
```

## Test

```bash
npm run test
```

## Deploy

```bash
truffle develop

# then
truffle(develop)> migrate --reset
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
