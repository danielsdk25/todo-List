// import logo from "./logo.svg";
// import "./App.css";
import React from 'react';
import { TodoCounter } from './components/todocounter/TodoCounter';
import { TodoSearch } from './components/todosearch/TodoSearch';
import { TodoList } from './components/todolist/TodoList';
import { TodoItem } from './components/todoitem/TodoItem';
import { CreateTodoButton } from './components/createtodobutton/CreateTodoButton';

const defaultTodos = [
  {
    text: 'Cosas por hacer número 1',
    completed: false
  },
  {
    text: 'Cosas por hacer número 2',
    completed: false
  },
  {
    text: 'hacer mas ejercicio',
    completed: false
  },
  {
    text: 'hacer trading',
    completed: false
  },
  {
    text: 'Tratar de no desesperarse',
    completed: false
  },
  {
    text: 'Tratar de no desesperarse',
    completed: false
  },
  {
    text: 'Tratar de no desesperarse',
    completed: false
  },
  {
    text: 'Nueva lista generada con exito',
    completed: false
  }
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);

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

  return (
    <>
      {/* Este es el contador de todos. contador de cuantas tareas se han completado */}
      <TodoCounter total={totalTodos} completed={completedTodos} />
      {/* esta es la busqueda de todos */}
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {/* Aqui se envian cada uno de los todos que el usuario haya creado */}
        {searchedTodos.map((todo) => (
          <TodoItem
            completed={todo.completed}
            key={todo.text}
            text={todo.text}
          />
        ))}
        {/* Esta funcion lo que hace es iterar por cada uno de los objetos dentro
      del array de "todos", y renderizar el componente TodoItem por cada objeto,
      cada uno con un valor distinto */}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
