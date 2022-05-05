import React from 'react';
import { Link } from 'react-router-dom';

const Everythinkbtn = () => {
    return (
        <div>
            <button className=' btn w-25 btn-primary'> <Link to="/Inventory">See  All Iteams</Link> </button> <br />
            <button className=' btn w-25 mt-5 btn-primary'>Add New Iteams</button>
        </div>
    );
};

export default Everythinkbtn;