import React from 'react';
import { TodoContext } from '../../context/TodoProvider';
import TodoListItem from './TodoListItem';


const TodoList = () => {
  return (
    <div className="listed-items">
        <TodoContext.Consumer>
            {state => state.todoList.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}
        </TodoContext.Consumer>
    </div>
  )
}

export default TodoList