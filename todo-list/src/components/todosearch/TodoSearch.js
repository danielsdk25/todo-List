import React from 'react';
import '../../styles/todosearch/TodoSearch.css';

function TodoSearch({ search, setSearch }) {
  const onSearchValue = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Ingresa aquí tu busqueda..."
      value={search}
      onChange={onSearchValue}
    />
  );
}

export { TodoSearch };
