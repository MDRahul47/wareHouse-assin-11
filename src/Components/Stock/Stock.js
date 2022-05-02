import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Stock.css';


const Stock = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="container">

       
        <div className="carts">
            

            {
                users?.slice(0, 6).map(user => <Cart
                    kay={user.id}
                    user={user}

                ></Cart>)
            }
        </div>
        </div>
    );
};

export default Stock;