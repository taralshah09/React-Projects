import React from "react";
import { ACTIONS } from "../App";

const TransactionElem = ({ text, amount, dispatch, id, setEditingTransaction }) => {
  const styles = {
    color: amount > 0 ? "green" : "red",
  };
  const side_styles = {
    position: "absolute",
    background: amount > 0 ? "green" : "red",
    height: "100%",
    width: "5px",
    right: "0",
  };

  return (
    <div className="element">
      <p style={styles}>{text}</p>
      <p style={styles}>{amount > 0 ? ` ${amount}` : amount * -1}</p>
      <div className="side" style={side_styles}></div>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DELETE, payload: { id: id } });
        }}
      >
        <i className="fa-solid fa-trash" style={{ color: "#fe0101" }}></i>
      </button>
      <button
        onClick={() => {
          setEditingTransaction({ id, text, amount });
        }}
      >
        <i className="fa-solid fa-edit" style={{ color: "black" }}></i>
      </button>
    </div>
  );
};

export default TransactionElem;
