
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateCart.css';



const UpdateCart = () => {
    const {id}= useParams();
    const [user,setuser] =useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/cars/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setuser(data));
    },[]);

    // --------------update user---------------- 

    const handleupdate = event =>{

    event.preventDefault();

    };
    return (
        <div>
                <div className="card shadow rounded card w-25  mx-auto ">
                <img  src={user.img} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Place Name: {user.name}</h4>
                    <h4 className="card-text">Price: {user.id}</h4>
                    <h4 className="card-text">Quantity: {user.price}</h4>
                    <h4 className="card-text">Supplier Name: {user.supplier}</h4>
                    <p className='discrip mt-3'>{user.dis}</p>
                    <input className='ms-4 ps-3' placeholder='Enter Quantity number' type="number" /><br />
                     <button onSubmit={handleupdate} className='ms-5 btn-g'>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateCart;