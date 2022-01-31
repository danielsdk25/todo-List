import React from 'react';

import '../../styles/todoform/TodoForm.css';

function TodoForm(props) {
  const [createTodo, setCreateTodo] = React.useState('');

  const onWrite = (event) => {
    setCreateTodo(event.target.value);
  };
  const onCancel = () => {
    props.setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.addTodo(createTodo);
    props.setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <p>¡Crea tu tarea pendiente aquí!</p>
      <textarea
        placeholder="¿Que deseas hacer?"
        value={createTodo}
        onChange={onWrite}
      />
      <div>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
