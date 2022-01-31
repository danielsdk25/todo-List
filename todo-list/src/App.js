// import logo from "./logo.svg";
// import "./App.css";
import React from 'react';
import { TodoCounter } from './components/todocounter/TodoCounter';
import { TodoSearch } from './components/todosearch/TodoSearch';
import { TodoList } from './components/todolist/TodoList';
import { TodoItem } from './components/todoitem/TodoItem';
import { CreateTodoButton } from './components/createtodobutton/CreateTodoButton';
import { TodoForm } from './components/todoform/TodoForm';

import { useLocalStorage } from './context/uselocalstorage/useLocalStorage';

import { Modal } from './components/modal/Modal';

function App() {
  const {
    listElement: todos,
    saveListElement: saveTodos,
    loading,
    error
  } = useLocalStorage('TodosV1', []);

  const [search, setSearch] = React.useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text
    });
    saveTodos(newTodos);
  };
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const [openModal, setOpenModal] = React.useState(false);

  return (
    <>
      {/* Este es el contador de todos. contador de cuantas tareas se han completado */}
      <TodoCounter total={totalTodos} completed={completedTodos} />
      {/* esta es la busqueda de todos */}
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {error && <p>Ha ocurrido un error...</p>}
        {loading && <p>Cargando datos. Espere un momento...</p>}
        {!loading && !searchedTodos.length && <p>¡Crea tu primera Tarea!</p>}
        {/* Aqui se envian cada uno de los todos que el usuario haya creado */}
        {searchedTodos.map((todo) => (
          <TodoItem
            completed={todo.completed}
            key={todo.text}
            text={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        {/* Esta funcion lo que hace es iterar por cada uno de los objetos dentro
      del array de "todos", y renderizar el componente TodoItem por cada objeto,
      cada uno con un valor distinto */}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export default App;
