import React from 'react';
import Google from '../Googlebtn/Google';
import imag from  './img/undraw_my_app_re_gxtj-removebg-preview.png'
import user from  './img/profile.png'
import './Singup.css';
import { Link } from 'react-router-dom';

const Singup = () => {
    return (
        <div className='alled'>
            <div className="mainia">

            <div className="ima">
                <img className='photooo' src={imag} alt="" />
            </div>


            <div className="texted">
            <form>
                <img className='w-25' src={user} alt="" /> <br />
                <input type="text" placeholder='Name' required /> <br />
                <input type="text" placeholder='Email' required /> <br />
                <input type="password" placeholder='Password' required /> <br />
                <p className='forget-msg'>Already have an account ?<Link className='singup' to='/login'> Login</Link></p>
             <Google></Google>
            </form>
            </div>
            </div>
        </div>
    );
};

export default Singup;