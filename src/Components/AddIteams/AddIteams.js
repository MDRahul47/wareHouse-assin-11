import React from 'react';
import { useForm } from "react-hook-form";

const AddIteams = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data);
        const url = `https://rocky-eyrie-40092.herokuapp.com/cars`;
        fetch (url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            alert('user Updated susccessfully');
        })
    
    };

    return (
        <div className='container'>
            <h3 className='text-center text-danger mt-5 mb-5'>Your iteam Well be add on inventory Section</h3>
        
   <form className=' text-center' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Name'  {...register("name", { required: true, maxLength: 20 })} /> <br />
      <input placeholder='Supplier Name'  {...register("supplier", { required: true, maxLength: 20 })} /> <br />
      <input  placeholder='Discription' {...register("dis")} /> <br />
      <input placeholder='Quantity' type="number" {...register("quantity")} /> <br />
      <input placeholder='Price' type="number" {...register("price")} /> <br />
      <input placeholder='Image Link' type="text" {...register("img")} /> <br />
      <input  className='btn btn-primary' type="submit" value="Add Iteam" />
    </form>
        </div>
    );
};

export default AddIteams;