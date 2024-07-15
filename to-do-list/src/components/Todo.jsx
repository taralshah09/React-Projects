import React from 'react'
import { ACTIONS } from '../App'

const Todo = ({todo,dispatch}) => {
  return (
    <div className='todo'
      onClick={()=>{
        dispatch({type : ACTIONS.TOGGLE_TODO, payload : {id : todo.id}})
      }}
    >
        <img src={todo.complete ? "../images/tick.png" : "../images/not_tick.png"}/>
        <p style={{
            color : todo.complete ? "#555" : "#000",
            textDecoration : todo.complete ? "line-through" : "none",
        }}>{todo.name}</p>
        <img src="../images/delete.png" id="delete-btn"
        onClick={()=>{
          dispatch({type:ACTIONS.DELETE_TODO,payload : {id : todo.id}})
        }}
        />
    </div>
  )
}

export default Todo
