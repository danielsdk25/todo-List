import React from 'react';
import '../../styles/createTodoButton/CreateTodoButton.css';

function CreateTodoButton(props) {
  const createNewTaskButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button
      className="CreateTodoButton"
      type="button"
      onClick={createNewTaskButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
