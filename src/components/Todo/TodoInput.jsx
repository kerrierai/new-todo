import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import upload from '../../assets/upload.svg';
import { TodoContext } from '../../context/TodoProvider';
import { v1 } from 'uuid';

const TodoInput = () => {
    const [todoInput, setTodoInput] = useState('');
    var todoContext = useContext(TodoContext);

    const handleEnterPress = (e)=>{
        if(e.keyCode===13 && todoInput != ""){
            todoContext.addTodo({
                id: v1(),
                title: todoInput,
            })
            setTodoInput('');
        }
    }

    return (
        <div className="input-wrapper">
        <TextField id="outlined-basic" label="Add Task" variant="outlined" value={todoInput} onChange={e=>{setTodoInput(e.target.value)}} onKeyDown={handleEnterPress}/>

        <Button variant="outlined" 
            onClick={() => {
                if (todoInput != "") {
                    todoContext.addTodo({
                        id: v1(),
                        title: todoInput,
                    })
                    setTodoInput('');
                }
            }}
            >
            <img src={upload} />
        </Button>
        </div>
    );
}

export default TodoInput