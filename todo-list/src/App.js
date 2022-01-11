// import logo from "./logo.svg";
// import "./App.css";
import { TodoCounter } from "./components/todocounter/TodoCounter";
import { TodoSearch } from "./components/todosearch/TodoSearch";
import { TodoList } from "./components/todolist/TodoList";
import { TodoItem } from "./components/todoitem/TodoItem";
import { CreateTodoButton } from "./components/createtodobutton/CreateTodoButton";

const todos = [
  {
    text: "Cosas por hacer número 1",
    completed: false
  },
  {
    text: "Cosas por hacer número 2",
    completed: false
  },
  {
    text: "hacer mas ejercicio",
    completed: false
  },
  {
    text: "hacer trading",
    completed: false
  },
  {
    text: "Tratar de no deseperarse",
    completed: false
  },
  {
    text: "Nueva lista generada con exito",
    completed: false
  }
];

function App() {
  return (
    <>
      {/* Este es el contador de todos. contador de cuantas tareas se han completado */}
      <TodoCounter />
      {/* esta es la busqueda de todos */}
      <TodoSearch />
      <TodoList>
        {/* Aqui se envian cada uno de los todos que el usuario haya creado */}
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
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
