import React, { useState } from 'react';
import Google from '../Googlebtn/Google';
import imag from  './img/undraw_my_app_re_gxtj-removebg-preview.png'
import user from  './img/profile.png'
import './Singup.css';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from '../../firebase.init';



const auth = getAuth();

const Singup = () => {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');



    const clickEmail = event => {
        setEmail(event.target.value);
    }

    const clickPassword = event => {
        setpassword(event.target.value);
    }




    const clickSubmit = event =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setEmail('');
            setpassword('');
            verifyEmail();
             
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
        })
        event.preventDefault();

        console.log("user is here:", email , password);
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log("email verification sent");
            })
    }
    return (
        <div className='alled'>
            <div className="mainia">

            <div className="ima">
                <img className='photooo' src={imag} alt="" />
            </div>


            <div className="texted">
            <form onSubmit={clickSubmit}>
                <img className='w-25' src={user} alt="" /> <br />
                <input type="text" placeholder='Name' required /> <br />
                <input onBlur={clickEmail} type="text" placeholder='Email' required /> <br />
                <input onBlur={clickPassword} type="password" placeholder='Password' required /> <br />
                <p>{error}</p>
                <p className='forget-msg'>Already have an account ?<Link className='singup' to='/login'> Login</Link></p>
                <button className='submite'>SignUp</button>
             <Google></Google>
            </form>
            </div>
            </div>
        </div>
    );
};

export default Singup;