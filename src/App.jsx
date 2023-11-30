import { Route, Routes } from 'react-router-dom'
import Signup from './pages/LoginSignup/signup';
import Login from './pages/LoginSignup/login';
import TodoPage from './pages/TodoPage/TodoPage';
import NextPage from './pages/TodoPage/NextPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/todo" element={<TodoPage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/next" element={<NextPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
