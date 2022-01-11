import React from "react";
import "../../styles/todoitem/TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <input type="checkbox" />
      <p>{props.text}</p>
      <button>X</button>
    </li>
  );
}

export { TodoItem };
