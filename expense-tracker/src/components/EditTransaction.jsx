import React, { useState } from 'react';
import { ACTIONS } from '../App';

const EditTransaction = ({ transaction, dispatch, setEditing }) => {
  const [text, setText] = useState(transaction.text);
  const [amount, setAmount] = useState(transaction.amount);

  const handleEdit = () => {
    if (text && amount) {
      dispatch({
        type: ACTIONS.EDIT_TRANSACTION,
        payload: { id: transaction.id, text, amount }
      });
      setEditing(false); // Close the edit form
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <div className="edit-transaction-box">
      <h2>Edit Transaction</h2>
      <hr />
      <div className="input-box">
        <p>Text (or description)</p>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="amount">
        <p>Amount</p>
        <span>Enter positive for income and negative for expense</span>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button onClick={handleEdit}>Update</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </div>
  );
};

export default EditTransaction;
