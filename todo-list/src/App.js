import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";

class App extends Component {
  constructor() {
    super();
    this.todoItems = ["Chơi pinano", "Đá fifa", "Coffee"];
  }

  render() {
    return (
      <div className="App">
        {this.todoItems.map((item, index) => (
          <TodoItem key={index} title={item} />
        ))}
      </div>
    );
  }
}

export default App;
