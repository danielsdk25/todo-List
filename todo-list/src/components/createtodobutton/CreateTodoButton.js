import React from 'react';
import '../../styles/createTodoButton/CreateTodoButton.css';

function CreateTodoButton() {
  const createNewTaskButton = () => {
    console.log('Se esta creando una nueva tarea');
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
