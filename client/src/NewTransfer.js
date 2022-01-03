import { useState } from 'react';

const NewTransfer = ({ createTransfer }) => {
  const [transfer, setTransfer] = useState(undefined);

  const updateTransfer = (e, field) => {
    const value = e.target.value;
    setTransfer({
      ...transfer,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTransfer(transfer);
  };

  return (
    <div>
      <h2>Create transfer:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='amount'>Amount</label>
        <input
          id='amount'
          type='text'
          onChange={(e) => updateTransfer(e, 'amount')}
        />
        <label htmlFor='to'>To</label>
        <input id='to' type='text' onChange={(e) => updateTransfer(e, 'to')} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default NewTransfer;
