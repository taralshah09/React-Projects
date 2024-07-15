import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useReducer } from "react";
import Todo from "./components/Todo";
import {nanoid} from 'nanoid'

export const ACTIONS = {
  ADD_TODO : "add-todo",
  TOGGLE_TODO : "toggle-todo",
  DELETE_TODO : "delete-todo",
}

function reducer(todos,action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todos,newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo=>{
        if(todo.id === action.payload.id){
          return {...todo, complete : !todo.complete}
        }
        return todo;
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => {
        if(todo.id !== action.payload.id){
          return todo
        }
      })
  }
}

function newTodo(name){
  return {id : nanoid(), name : name, complete : false}
}

const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

function App() {


  const [todos,dispatch] = useReducer(reducer,getInitialTodos())
  const [name, setName] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <main>
      <div className="container">
        <div className="top-box">
          <img src="../images/todo_icon.png" className="main-icon" />
          <h2>To Do List</h2>
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your task"
            value={name}
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
          />
          <button id="search-icon" onClick={(e)=>{
            e.preventDefault();
            dispatch({type:ACTIONS.ADD_TODO, payload : {name : name}})
          }}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="tasks-container">
          {
          todos.map(todo=><Todo key={todo.id} todo={todo} dispatch={dispatch} />)
          }
        </div>
      </div>
    </main>
  );
}

export default App;
