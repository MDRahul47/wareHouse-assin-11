import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateCart = () => {
    const {id}= useParams();
    const [user,setuser] =useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/cars/${id}"`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setuser(data));
    })
    return (
        <div>
            <h1>updating user: {user.name}</h1>
        </div>
    );
};

export default UpdateCart;