import React, { useState } from 'react';
import './Login.css';
import photo from './img/full.png';
import user from './img/profile.png';
import Google from '../Googlebtn/Google';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');

    const chlickSubmit = event => {
        console.log(user);
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                console.error(error);
                setError(error.message);

            })
    }

    const passwordClick = event => {
        setpassword(event.target.value);
    }

    const emailClick = event => {
        setEmail(event.target.value);
    }


    const handlePaasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("email sent");
            })
        }

    return (
    <div className='all'>


        <div className="main">
            <div className="imag">
                <img className='photooo' src={photo} alt="" />
            </div>
            <div className="text">
            <form onSubmit={chlickSubmit}>
                <img className='w-25' src={user} alt="" /> <br />
                <input onBlur={emailClick} type="text" placeholder='Email' required /> <br />
                <input onBlur={passwordClick} type="password" placeholder='Password' required /> <br />
              <p className='forget-msg'><Link className='singup' to='/singup'>sing-up</Link></p>
              <p className='forget-msg'><button onClick={handlePaasswordReset} className='forget'>Forget Password ?</button></p>
              <button className='submite'>Login</button>
             <Google></Google>
            </form>
            </div>
        </div>


    </div>
    );
};

export default Login;