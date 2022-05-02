import React from 'react';
import { GrServices } from "react-icons/gr";
import { SiCashapp } from "react-icons/si";
import { GrMapLocation } from "react-icons/gr";
import './Titlecar.css';

const Titlecar = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto ">
        <div className="col ">
          <div className="card h-100 titlecar">
            
            <div className="card-body">
              <h5 className="card-title text-center"><GrServices className='icn'></GrServices> Build&Price</h5>
             
            </div>
           
          </div>
        </div>
        <div className="col ">
          <div className="card h-100 titlecar">
          
            <div className="card-body">
              <h5 className="card-title text-center"> <SiCashapp className='icn'></SiCashapp> Trade-In-Value</h5>
            </div>
           
          </div>
        </div>
        <div className="col ">
          <div className="card h-100 titlecar">
            <div className="card-body">
              <h5 className="card-title text-center">  <GrMapLocation className='icn'></GrMapLocation> Find a Dealer</h5>
            
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default Titlecar;