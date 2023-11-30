import React from 'react';
import { TodoContext } from '../../context/TodoProvider';

const TodoCompleteItems = ({todo}) => {
  const todoContext = useContext(TodoContext);

  return (
      <div className="task">
        <h4>{todo.title}</h4>
      </div>
  )
}

export default TodoCompleteItems