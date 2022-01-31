import React from 'react';
import '../../styles/todocounter/TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      Has competado {completed} de {total} todos
    </h2>
  );
}

export { TodoCounter };
