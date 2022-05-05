import React from 'react';
import './Cart.css';
import {useNavigate } from 'react-router-dom';

const Cart = ({ user }) => {
    const { name,_id, price, img, dis, quantity, supplier } = user;

    const navigate = useNavigate ();

        const navigarcarDetails =id =>{
            navigate('/selected/${id}');
        }

    return (
        <div class="card-group edditd ">
            <div class="card shadow rounded card">
                <img src={img} class="card-img-top photo" alt="..." />
                <div class="card-body">
                    <h3 class="card-title">Place Name: {name}</h3>
                    <h4 class="card-text">Price: {price}</h4>
                    <h3 class="card-text">Quantity: {quantity}</h3>
                    <h3 class="card-text">Supplier Name: {supplier}</h3>
                    <p className='discrip'>{dis}</p>
                     <button onClick={()=>navigarcarDetails(_id)} className='ms-5 btn-g'>Delivered</button>
                </div>
            </div>

        </div>
    );
};

export default Cart;