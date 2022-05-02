import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ user }) => {
    const { name, price, img, dis, quantity } = user;

    return (
        <div class="card-group edditd ">
            <div class="card shadow rounded card">
                <img src={img} class="card-img-top photo" alt="..." />
                <div class="card-body">
                    <h3 class="card-title">Place Name: {name}</h3>
                    <h4 class="card-text">Price: {price}</h4>
                    <h3 class="card-text">Quantity: {quantity}</h3>
                    <p className='discrip'>{dis}</p>
                    <Link to='/checkout'> <button className='ms-5 btn-g'>Booking</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Cart;