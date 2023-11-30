import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import week from '../../assets/week.svg';
import calender from '../../assets/calender.svg';
import task from '../../assets/task.svg';
import list from '../../assets/list.svg';


const NavBar = () => {
  return (
    <div className='sidebar'>
        <div className="logo-wrapper">
            <Link to="/" className='logo'>
                L .
            </Link>
        </div>
        <ul className='menu-list'>
            <li>
                <Link to="/todo" className='link active'>
                    <img src={task} alt="" />
                    <span>My day</span>
                </Link>
            </li>
            <li>
                <Link to="/next" className='link'>
                    <img src={week} alt="" />
                    <span>Next 7 days</span>
                </Link>
            </li>
            <li>
                <Link to="/todo" className='link'>
                    <img src={list} alt="" />
                    <span>All my task</span>
                </Link>
            </li>
            <li>
                <Link to="/todo" className='link'>
                    <img src={calender} alt="" />
                    <span>My Calendar</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar