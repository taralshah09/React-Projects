import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Task = ({ dispatch, name, complete, ACTIONS, id}) => {
  const styles = {
    color: complete ? "#c2c2c2" : "black",
  };
  const [edit,setEdit] = useState(false)
  const editRef = useRef("");
  return (
    <>
      {edit && (
        <div id="edit-screen">
          <div className="input-box-edit">
            <input
              type="text"
              ref={editRef}
              placeholder="Enter your updated task"
            />
            <button
               onClick={() => {
                dispatch({
                  type: ACTIONS.EDIT_TASK,
                  payload: { id: id, name: editRef.current.value },
                });
                setEdit(false);
                return;
              }}
            >
              Update
            </button>
          </div>
        </div>
      )}

      <div
        className="task"
        
      >
        <img src={complete ? "../images/tick.png" : "../images/not_tick.png"} />
        <p style={styles} onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TASK, payload: { id: id } })
        }>{name}</p>
        <button
          className="trash"
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: id } })
          }
        >
          <i className="fa-solid fa-trash"></i>
        </button>
        <button className="edit" onClick={()=>setEdit(true)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
    </>
  );
};

export default Task;
