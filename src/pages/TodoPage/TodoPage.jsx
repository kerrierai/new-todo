import React, { useState , useEffect } from 'react';
import './TodoPage.scss'
import Grid from '@mui/material/Grid';
import NavBar from '../../components/NavBar/NavBar';
import TodoInput from '../../components/Todo/TodoInput';
import TodoList from '../../components/Todo/TodoList';


const TodoPage = () => {
    return (
    <div className='main-section'>
        <Grid container>
            <Grid item xs={3}>
                <div>
                    <NavBar/>
                </div>
            </Grid>
            <Grid item xs={9}>
                <div className="main-flex">
                    <div className='right-box-wrapper'>
                        <div className="title-wrapper">
                            <h3>Hello, Kyarry !</h3>
                            <h1>What will you accomplish today?</h1>
                            <hr/>
                        </div>
                        <div className="todo-flex">
                            <TodoList/>
                            <TodoInput/>
                        </div>
                    </div>
                    <div className='complete-wrapper'>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
    )
}

export default TodoPage