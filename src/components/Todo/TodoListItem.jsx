import React, { useContext, useState } from 'react';
import bin from '../../assets/bin.svg';
import edit from '../../assets/edit-pen.svg';
import check from '../../assets/checked.svg';
import upload from '../../assets/upload.svg';
import TextField from '@mui/material/TextField';
import { TodoContext } from '../../context/TodoProvider';

const TodoListItem = ({todo}) => {
  const [toggleEdit, setToggleEdit] = useState(false); 
  const todoContext = useContext(TodoContext);
  const [todoInput, setTodoInput] = useState(todo.title);
  
  return (
      <div className="task">
        {
          toggleEdit ? 
          <TextField variant="outlined" value={todoInput} onChange={e=>{setTodoInput(e.target.value)}}
          /> 
          : <h4>{todo.title}</h4>
        }
        
        <div className="action-btns">
          <button className="edit" 
            onClick={() => {
            setToggleEdit(!toggleEdit);
            if (todoInput != '') {
                todoContext.updateTodo({
                    id: todo.id,
                    title: todoInput
                });
                // setName("");
            }
            }}
          >
            {
            toggleEdit ? <img src={upload}/> : <img src={edit}/>
            } 
          </button>
          <button className="delete" 
            onClick={() => {
              todoContext.removeTodo(todo.id);
            }}
          ><img src={bin}/></button>
          {/* <button>
            <img src={check} />
          </button> */}
        </div>
      </div>
  )
}

export default TodoListItem