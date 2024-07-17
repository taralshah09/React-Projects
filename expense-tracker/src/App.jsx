import { useState, useRef, useEffect, useReducer } from 'react';
import './App.css';
import Balance from './components/Balance';
import History from './components/History';
import AddNewTransaction from './components/AddNewTransaction';

export const ACTIONS = {
  ADD_TRANSACTION: "add-transaction",
  DELETE: "delete-transaction"
};

function reducer(transactions, action) {
  switch (action.type) {
    case ACTIONS.ADD_TRANSACTION:
      return [...transactions, NewTransaction(action.payload.text, action.payload.amount)];
    case ACTIONS.DELETE:
      return transactions.filter(elem => elem.id !== action.payload.id);
    default:
      return transactions;
  }
}

const NewTransaction = (text, amount) => {
  return { id: Date.now(), text: text, amount: parseFloat(amount), delete: false };
}

const getInitialTransactions = () => {
  const savedTransactions = localStorage.getItem("transactions");
  return savedTransactions ? JSON.parse(savedTransactions) : [];
}

function App() {
  const [transactions, dispatch] = useReducer(reducer, getInitialTransactions());

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const text = useRef(null);
  const amount = useRef(null);

  return (
    <main>
      <div className="container">
        <h2 className='title'>Expense Tracker</h2>
        <Balance transactions={transactions} />
        <History transactions={transactions} dispatch={dispatch} />
        <AddNewTransaction text={text} amount={amount} dispatch={dispatch} />
      </div>
    </main>
  );
}

export default App;
