import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      // {
      //   title: "Chơi pinano",
      //   isComplete: false,
      // },
      // {
      //   title: "Đá fifa",
      //   isComplete: true,
      // },
      // {
      //   title: "Coffee",
      //   isComplete: false,
      // },
    ];
  }

  render() {
    return (
      <div className="App">
        {this.todoItems.length > 0 &&
          this.todoItems.map((item, index) => (
            <TodoItem key={index} item={item} />
          ))}
        {this.todoItems.length === 0 && "Nothing to show"}
      </div>
    );
  }
  // render() {
  //   if (this.todoItems > 0) {
  //     return (
  //       <div className="App">
  //         {this.todoItems.map((item, index) => (
  //           <TodoItem key={index} item={item} />
  //         ))}
  //       </div>
  //     );
  //   } else {
  //     return <div className="App">Nothing to show</div>;
  //   }
  // }
}

export default App;
