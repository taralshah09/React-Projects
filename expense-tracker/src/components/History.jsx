import React from "react";
import TransactionElem from "./TransactionElem";

const History = ({ transactions , dispatch }) => {
    
  return (
    <div className="history-box">
      <h2>History</h2>
      <hr />
      <div className="history-container">
        {transactions.length > 0 ? (
          transactions.map((elem, index) => (
            <TransactionElem
              text={elem.text}
              amount={elem.amount}
              key={index}
              id={elem.id}
              dispatch={dispatch}
            />
          ))
        ) : (
          <h2>Nothing to show in history!</h2>
        )}
      </div>
    </div>
  );
};

export default History;

