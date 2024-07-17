import React from "react";
import { ACTIONS } from "../App";

const AddNewTransaction = ({ text, amount, dispatch }) => {
  const handleAddTransaction = () => {
    if (text.current.value && amount.current.value) {
      dispatch({
        type: ACTIONS.ADD_TRANSACTION,
        payload: { text: text.current.value, amount: amount.current.value }
      });
      // Clear input fields
      text.current.value = "";
      amount.current.value = "";
    } else {
      alert("Please fill the data form first!");
    }
  };

  return (
    <div className="new-transaction-box">
      <h2>Add new Transaction</h2>
      <hr />

      <div className="input-box">
        <p>Text (or description)</p>
        <input type="text" placeholder="Enter text" ref={text} />
      </div>
      <div className="amount">
        <p>Amount</p>
        <span>Enter positive for income and negative for expense</span>
        <input type="number" placeholder="Enter amount" ref={amount} />
      </div>
      <button onClick={handleAddTransaction}>Add</button>
    </div>
  );
};

export default AddNewTransaction;
