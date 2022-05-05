import React from 'react';
import { useForm } from "react-hook-form";

const AddIteams = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data);
        const url = `http://localhost:5000/cars`;
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
        })
    
    };

    return (
        <div className='container'>
        
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