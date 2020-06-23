import React, { Component } from "react";
import classNames from "classnames";
import "./TodoItem.css";

import PropTypes from "prop-types";

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    return (
      <div
        onClick={onClick}
        className={classNames("TodoItem", {
          "TodoItem--complete": item.isComplete,
        })}
      >
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    isComplete: PropTypes.bool,
    title: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
};

export default TodoItem;
