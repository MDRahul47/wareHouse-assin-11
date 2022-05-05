import React from 'react';
import './Cart.css';

const Cart = ({ user }) => {
    const { name, price, img, dis, quantity, supplier } = user;

    

       

    return (
        <div className="card-group edditd ">
            <div className="card shadow rounded card">
                <img src={img} className="card-img-top photo" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Place Name: {name}</h4>
                    <h4 className="card-text">Price: {price}</h4>
                    <h4 className="card-text">Quantity: {quantity}</h4>
                    <h4 className="card-text">Supplier Name: {supplier}</h4>
                    <p className='discrip mt-3'>{dis}</p>
                     <button  className='ms-5 btn-g'>Delivered</button>
                </div>
            </div>

        </div>
    );
};

export default Cart;