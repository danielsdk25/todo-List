import React from "react";
import "../../styles/todolist/TodoList.css";

function TodoList(props) {
  return (
    <section className="TodoList">
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
