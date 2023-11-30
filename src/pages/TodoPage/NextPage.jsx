import React, { useState , useEffect } from 'react';
import './TodoPage.scss'
import Grid from '@mui/material/Grid';
import NavBar from '../../components/NavBar/NavBar';
import { useQuery } from 'react-query';
import { fetchTodos } from '../../components/api/api';

const NextPage = () => {
    const { data: todos, isLoading, error } = useQuery('todos', fetchTodos);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

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
                            <h1>Your Next 7 days task.</h1>
                            <hr/>
                        </div>
                        <div>
                            <div >
                                {todos.slice(0, 3).map((todo) => (
                                    <div className="task">
                                        <h4 key={todo.id}>{todo.title}</h4>
                                    </div>
                                ))}
                            </div>
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

export default NextPage