import React from 'react';
import useUsers from '../Hook/Hook';
import './Myiteams.css';

const MyIteams = () => {
    const [users, setUsers]= useUsers();


    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure ?')
        if(proceed ){
                const url = `http://localhost:5000/cars/${id}`;
            fetch(url,{
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining = users.filter(user=>user._id !==id)
                setUsers(remaining);
            })

        }

    }
    return (
        <div className='container deted  mx-auto'>
            {
                users.map(user=> <div key={user._id}>
                    <div className="oneIteam my-3">
                    <h4 >{user.name}  <button onClick={()=>handleDelete(user._id)} className='delete'>Delete</button></h4>
                    </div>
                    
             </div>)
            }
            
        </div>
    );
};

export default MyIteams;