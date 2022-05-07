import React from 'react';
import { Link } from 'react-router-dom';
import './Lastsection.css';

const Lastsection = () => {
    return (
        <div className='container two'>
            <div className="">
                <img className="img" src={"https://st2.depositphotos.com/1004713/8657/i/600/depositphotos_86579280-stock-photo-car-agent-showing-vehicle-to.jpg"} alt="" />
            </div>
            <div className="tet">
                <h2>Ouer Best Service</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sit enim ducimus maxime eos. Architecto blanditiis totam dolorum perferendis. Totam.</p>
                <Link to='inventory'><button className='btn btn-primary'>More info</button></Link>
            </div>
        </div>
    );
};

export default Lastsection;