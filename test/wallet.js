const Wallet = artifacts.require('Wallet');

contract('Wallet', (accounts) => {
  let wallet;

  beforeEach(async () => {
    wallet = await Wallet.new([accounts[0], accounts[1], accounts[3]], 2);
  });
});
