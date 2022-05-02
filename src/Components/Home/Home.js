import React from 'react';
import './Home.css';
import banne from './banner-img/one.jpg';
import banner from './banner-img/three.jpg';
import banni from './banner-img/four.jpg';
import AutoPlay from '../Slider/Slider';
import Titlecar from '../Titlecar/Titlecar';
import Stock from '../Stock/Stock';

const Home = () => {
  return (
    <div className=''>
      <div id="carouselExampleCaptions" className="carousel slide mb-5  " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banne} className="d-block w-100" alt="..." />
            
          </div>
          <div className="carousel-item">
            <img src={banner} className="d-block w-100" alt="..." />
            
          </div>
          <div className="carousel-item">
            <img src={banni} className="d-block w-100" alt="..." />
           
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Titlecar></Titlecar>
      <h2 className='text-center title'>Our Top Cars</h2>
      <Stock></Stock>
      <AutoPlay></AutoPlay>
    </div>
    
  );
};

export default Home;