import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Inventory.css';


const Inventory = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
       <div className="container">

            
       <h2 className='text-center text-danger mt-5'>Our Colloction</h2>
        <div className="carts">
            

            {
                users.map(user => <Cart
                    key={user._id}
                    user={user}

                ></Cart>)
            }
        </div>
        </div>
    );
};

export default Inventory;