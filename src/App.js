import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // let newTodoList = [...todoList];

    // newTodoList.oush(todo);

    // setTodoList(newTodoList);
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
  };
  return (
    <div className="app">
      <div className="app-header">
        <h1>Todo</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="todoLabel"> wat want today?</label>
        <br />
        <input
          onChange={handleChange}
          value={todo}
          type="text"
          className="input"
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      {todoList.map((todo, index) => {
        return (
          <div key={index} className="todo">
            <input type="checkbox" />
            <h4>{todo}</h4>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
