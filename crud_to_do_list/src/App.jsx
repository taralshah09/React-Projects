import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./components/Task";
import { useReducer } from "react";
import { nanoid } from "nanoid";
import { useRef } from "react";
import { useEffect } from "react";

export const ACTIONS = {
  ADD_TASK: "add_task",
  TOGGLE_TASK: "toggle_task",
  EDIT_TASK: "edit_task",
  DELETE_TASK: "delete_task",
};

function reducer(tasks, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [...tasks, newTask(action.payload.name, action.payload.id)];

    case ACTIONS.TOGGLE_TASK:
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, complete: !task.complete };
        } else {
          return task;
        }
      });

    case ACTIONS.DELETE_TASK:
      return tasks.filter(task=>{
        return task.id !== action.payload.id
      })
    
      case ACTIONS.EDIT_TASK:
        return tasks.map(task=>{
          if(task.id === action.payload.id){
            return {id : action.payload.id, name : action.payload.name, complete:false};
          }
          else{
            return task;
          }
        })
    
    default :
     throw new Error();
  }
}

function newTask(name, id) {
  return { id: nanoid(), name: name, complete: false };
}

function getInitialTasks(){
  const initialTasks = localStorage.getItem('tasks');
  return initialTasks ? JSON.parse(initialTasks) : [];
}

function App() {
  const [tasks, dispatch] = useReducer(reducer, getInitialTasks());
  const inputRef = useRef("");
  const [edit, setEdit] = useState();

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks])
  return (
    <main>
      <div className="container">
        <h2 className="title">
          <i className="fa-solid fa-list-check"></i> CRUD To Do App
        </h2>
        <div className="input-box">
          <input ref={inputRef} type="text" placeholder="Enter your task" />
          <button
            id="addTask"
            onClick={() => {
              if (inputRef.current.value) {
                dispatch({
                  type: ACTIONS.ADD_TASK,
                  payload: { id: nanoid(), name: inputRef.current.value },
                });
                inputRef.current.value = "";
              } else {
                alert("Please enter the task first!");
              }
            }}
          >
            Add
          </button>
        </div>
        <div className="tasks-container">
          {tasks.map((task) => (
            <Task
            key = {task.id}
              name={task.name}
              id={task.id}
              complete={task.complete}
              dispatch={dispatch}
              ACTIONS={ACTIONS}
              edit={edit}
              setEdit={setEdit}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
