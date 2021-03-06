import { useEffect, useState } from 'react';
import { getWeb3, getWallet } from './utils.js';
import Header from './Header.js';
import NewTransfer from './NewTransfer.js';
import TransfersList from './TransfersList.js';

function App() {
  // web3
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);

  // smart contract
  const [approvers, setApprovers] = useState([]);
  const [quorum, setQuorum] = useState(undefined);
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);

      const approvers = await wallet.methods.getApprovers().call();
      const quorum = await wallet.methods.quorum().call();
      const transfers = await wallet.methods.getTransfers().call();

      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);

      setApprovers(approvers);
      setQuorum(quorum);
      setTransfers(transfers);
    };
    init();
  }, []);

  const createTransfer = async ({ amount, to }) => {
    await wallet.methods.createTransfer(amount, to).send({ from: accounts[0] });

    const transfers = await wallet.methods.getTransfers().call();
    setTransfers(transfers);
  };

  const approveTransfer = async (transferId) => {
    await wallet.methods
      .approveTransfer(transferId)
      .send({ from: accounts[0] });

    const transfers = await wallet.methods.getTransfers().call();
    setTransfers(transfers);
  };

  if (
    typeof web3 === undefined ||
    typeof accounts === undefined ||
    typeof wallet === undefined ||
    approvers.length === 0 ||
    typeof quorum === undefined
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Multisig Dapp
      <Header approvers={approvers} quorum={quorum} />
      <NewTransfer createTransfer={createTransfer} />
      <TransfersList transfers={transfers} approveTransfer={approveTransfer} />
    </div>
  );
}

export default App;
