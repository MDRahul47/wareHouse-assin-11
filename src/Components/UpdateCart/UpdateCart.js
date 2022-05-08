
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

    // const [deliverQuantity , setDeliverQuantity] = useState(0);

    // const handleQuantityDecrease = (id)=>{
    //     const decrease = quantity - 1 ; 
    //     const update = {decrease};
    //     fetch ('http://localhost:5000/cars/${id}',{
    //         method : "PUT",
    //         heanders : {
    //             "content-type" : "application/json",
    //         },
    //         body : JSON.stringify(update),
    //     })
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         if (data.modifiedCount){
    //             setDeliverQuantity(deliverQuantity+1);
    //         }
    //     });
    // }

    const handleupdate = event =>{

    event.preventDefault();

    };
    return (
        <div>
                <div className="card shadow rounded card w-25 h-auto mt-5  mx-auto ">
                <img  src={user.img} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h4 className="card-title">Place Name: {user.name}</h4>
                    <h4 className="card-text">Price: {user.price}</h4>
                    <h4 className="card-text">Quantity: {user.quantity}</h4>
                    <h4 className="card-text">Supplier Name: {user.supplier}</h4>
                    <p className='discrip mt-3'>{user.dis}</p>
                    <button  className='btn btn-primary mb-4'>Increse </button> <br />
                     <button  onSubmit={handleupdate} className=' btn btn-primary'>Dicrese</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateCart;