import React, { useState } from 'react';
import TransactionElem from './TransactionElem';
import EditTransaction from './EditTransaction';

const History = ({ transactions, dispatch }) => {
  const [editingTransaction, setEditingTransaction] = useState(null);

  return (
    <div className="history-box">
      <h2>History</h2>
      <hr />
      <div className="history-container">
        {editingTransaction ? (
          <EditTransaction
            transaction={editingTransaction}
            dispatch={dispatch}
            setEditing={setEditingTransaction}
          />
        ) : (
          transactions.length > 0 ? (
            transactions.map((elem) => (
              <TransactionElem
                text={elem.text}
                amount={elem.amount}
                key={elem.id}
                id={elem.id}
                dispatch={dispatch}
                setEditingTransaction={setEditingTransaction}
                setEditing={setEditingTransaction}
              />
            ))
          ) : (
            <h2>Nothing to show in history!</h2>
          )
        )}
      </div>
    </div>
  );
};

export default History;
