const TransfersList = ({ transfers, approveTransfer }) => {
  return (
    <div>
      <h2>Transfers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>To</th>
            <th>Approvals</th>
            <th>Sent</th>
          </tr>
        </thead>
        <tbody>
          {transfers.map(({ id, amount, to, approvals, sent }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{amount}</td>
                <td>{to}</td>
                <td>
                  {approvals}{' '}
                  <button onClick={() => approveTransfer(id)}>Approve</button>
                </td>
                <td>{sent ? 'yes' : 'no'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransfersList;
