import React from 'react';
import './Footer.css';
import { FaFacebook , FaInstagramSquare,FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='buttom'>
         <div className="mainia container  ">
            <div className="contract">
                <ul>
                    <li> <h2>Contract</h2></li>
                    <li> <a href="https://www.facebook.com/mdrahul.bhuiyan.50"><FaFacebook></FaFacebook>  Facebook</a></li>
                    <li> <a href="https://www.instagram.com/mh._rahul/"><FaInstagramSquare></FaInstagramSquare>  Instagram</a> </li>
                    <li> <a href="https://www.linkedin.com/in/md-rahul-bhuiyan-4bb849228/"> <FaLinkedin></FaLinkedin> Linkedin</a>   </li>
                </ul>
            </div>
            <div className="product">
            <ul>
            <li><h2>Products</h2></li>
                <li>Watch</li>
                <li>Bracelet</li>
                <li>Mobile</li>
                <li>Laptop</li>
            </ul>
            </div>
            <div className="about">
            <ul>
            <li><h2>Adress</h2></li>
                <li>Modonpur, Bandar</li>
                <li>Narayangonj, Bangladesh</li>
            </ul>
            </div>
           </div>
           <p className='copyright'>All rights reserved by © Rahul Bhuauin 2020 </p>
        </footer>
    );
};

export default Footer;