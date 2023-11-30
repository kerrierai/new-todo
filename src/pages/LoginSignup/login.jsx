import React, { useState } from 'react';
import './LoginSignup.scss';
import { Link } from 'react-router-dom';
import loginimg from '../../assets/login-img.svg'
import apple from '../../assets/apple.svg';
import fb from '../../assets/fb.svg';
import google from '../../assets/google.svg'
import { useNavigate } from 'react-router-dom';

const login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleLogin = () => {
      if (username === 'user@gmail.com' && password === 'password') {
        navigate('/todo');
      } else {
          setLoginFailed(true);
      }
    };
    
  return (
    <>
    <div className='login-signup'>
        <div className="sm-container">
            <div className="signin-grid">
                <div className='img-wrapper'>
                    <img src={loginimg} alt="" className='img-responsive'/>
                </div>
                <div className='right-box'>
                    <h1>Log In</h1>
                    <div className='form-login'>
                        <form action="#">
                            <input type="email" placeholder='Enter your Email address' value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                            <input type="password" placeholder='Enter your password' value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                            {loginFailed && <div className="login-failed-message">Login Failed. Please try again.</div>}
                            <button type='submit' className='primaryBtn' onClick={handleLogin}>Log In</button>
                        </form>
                    </div>
                    
                    <div className='additional-details'>
                        <a href="#" title="Forgot password?" className='forgot-link'>Forgot password?</a>
                        <p>By continuing with Google, Apple, or Email, you agree to Todoist’s <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
                    </div>
                    <h3>Continue with: </h3>
                    <div className='other-login'>
                        <a href="#" title="">
                            <img src={fb} alt="" />
                        </a>
                        <a href="#" title="">
                            <img src={google} alt="" />
                        </a>
                        <a href="#" title="">
                            <img src={apple} alt="" />
                        </a>
                    </div>
                    <div className='opt-link'>
                        <div>Don’t have an account? 
                            <Link to="/signup" className='link'>
                                Sign Up
                            </Link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default login