import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        {
          title: "Chơi pinano",
          isComplete: false,
        },
        {
          title: "Đá fifa",
          isComplete: "abc",
        },
        {
          isComplete: false,
        },
      ],
    };
  }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete,
          },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  }
  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        {todoItems.length > 0 &&
          todoItems.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              onClick={this.onItemClicked(item)}
            />
          ))}
        {todoItems.length === 0 && "Nothing to show"}
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
