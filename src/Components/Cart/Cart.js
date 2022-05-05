import React from 'react';
import './Cart.css';

const Cart = ({ user }) => {
    const { name, price, img, dis, quantity, supplier } = user;

    

       

    return (
        <div class="card-group edditd ">
            <div class="card shadow rounded card">
                <img src={img} class="card-img-top photo" alt="..." />
                <div class="card-body">
                    <h4 class="card-title">Place Name: {name}</h4>
                    <h4 class="card-text">Price: {price}</h4>
                    <h4 class="card-text">Quantity: {quantity}</h4>
                    <h4 class="card-text">Supplier Name: {supplier}</h4>
                    <p className='discrip mt-3'>{dis}</p>
                     <button  className='ms-5 btn-g'>Delivered</button>
                </div>
            </div>

        </div>
    );
};

export default Cart;