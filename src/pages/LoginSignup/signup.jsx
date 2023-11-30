import React, { useReducer } from 'react';
import './LoginSignup.scss';
import { Link } from 'react-router-dom';
import signinimg from '../../assets/login.svg'
import apple from '../../assets/apple.svg';
import fb from '../../assets/fb.svg';
import google from '../../assets/google.svg';
import { useNavigate } from 'react-router-dom';

const initialState = {
    name: '',
    email: '',
    password: '',
    passwordagain: '',
    termsaccepted: false,
}

const reducer = (state, action) => {
    return {...state, [action.input] : action.value};
}

const validState = (state) => {
    return state.password === state.passwordagain
    && state.termsaccepted
    && state.password.length > 3;
}

const Signup = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();

    console.log(state);

    const clickButton = (e) => {
        e.preventDefault();
        alert(`Hi ${state.name} you have successfully regsitered!`);
        navigate('/');

    }

    const onChange = (e) => {
        const {name, value, checked} = e.target;
        const action = {
            input: name,
            value: name === "termsaccepted" ? checked : value,
        }
        dispatch(action);
    }
    
    
  return (
    <>
    <div className='login-signup'>
        <div className="sm-container">
            <div className="signin-grid">
                <div className='img-wrapper'>
                    <img src={signinimg} alt="" className='img-responsive'/>
                </div>
                <div className='right-box'>
                    <h1>Sign Up</h1>
                    <div className='form-login'>
                        <form action="#">
                          <input type="text" placeholder='Enter your Name' name="name" onChange={onChange}/>
                          <input type="email" placeholder='Enter your Email address' name="email" onChange={onChange}/>
                          <input type="password" placeholder='Enter a password' name="password" onChange={onChange}/>
                          <input type="password" placeholder='Confirm password' name="passwordagain" onChange={onChange}/>
                          <label className="checkbox-wrap" >
                            <input type="checkbox" name="termsaccepted" onChange={onChange}/>
                            Terms and condition
                          </label>
                          <button onClick={clickButton} className={`primaryBtn ${validState(state) ? '' : 'disabled'}`}>Sign Up</button>
                        </form>
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
                        <div>Already have an account? 
                            <Link to="/" className='link'>
                                Login
                            </Link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup