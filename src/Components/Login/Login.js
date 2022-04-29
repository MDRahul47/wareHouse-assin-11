import React from 'react';
import './Login.css';
import photo from './img/full.png';
import user from './img/profile.png';
import Google from '../Googlebtn/Google';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
    <div className='all'>


        <div className="main">
            <div className="imag">
                <img className='photooo' src={photo} alt="" />
            </div>
            <div className="text">
            <form>
                <img className='w-25' src={user} alt="" /> <br />
                <input type="text" placeholder='Email' required /> <br />
                <input type="password" placeholder='Password' required /> <br />
              <p className='forget-msg'><span >Forget Password ||</span> <Link className='singup' to='/singup'>sing-up</Link></p>
             <Google></Google>
            </form>
            </div>
        </div>


    </div>
    );
};

export default Login;