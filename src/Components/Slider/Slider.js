import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slider.css';



export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <h2 className="text-center mt-5 text-danger"> Top Collection </h2>
        <Slider className="text-center mt-4 " {...settings}>
          <div>
          <img className="pho" src="https://media.zigcdn.com/media/model/2020/Sep/ghost-3_360x240.jpg" alt="" />
          <h3>Rolls Royce Ghost</h3>
          <div className="line"></div>
          </div>
          <div>
          <img className="pho" src="https://imgd.aeplcdn.com/664x374/n/cw/ec/48034/2-series-gran-coupe-exterior-right-front-three-quarter.jpeg?q=75" alt="" />
          <h3>MERCEDES-BENZ E CLASS</h3>
          <div className="line"></div>
          
          </div>
          <div>
          <img className="pho" src="https://imgd.aeplcdn.com/664x374/cw/ec/38113/BMW-7-Series-Right-Front-Three-Quarter-164132.jpg?wm=0&q=75" alt="" />
          <h3>BMW 7 SERIES SEDAN</h3>
          <div className="line"></div>
          </div>
          <div>
          <img className="pho" src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/47336/e-class-exterior-right-front-three-quarter.jpeg?q=75" alt="" />
          <h3>MERCEDES-BENZ CLA</h3>
          <div className="line"></div>
          </div>
          <div>
          <img className="pho" src="https://www.motortrend.com/uploads/sites/10/2017/03/2016-audi-a8-lwb-sedan-angular-front.png" alt="" />
          <h3>AUDI A6</h3>
          <div className="line"></div>
          </div>
          <div>
          <img className="pho" src="https://cdn.autoportal.com/img/new-cars-gallery/rollsroyce/phantom/colors/ac96c43b1c9b5b8e9f860fe254bfbebf.jpg" alt="" />
          <h3>Phantom Convertible Coupe</h3>
          <div className="line"></div>
          </div>
          <div>
          <img className="pho" src="https://drive-my.com/wp-content/uploads/importedmedia/1060" alt="" />
          <h3>Silver Shadow</h3>
          <div className="line"></div>
          </div>
          <div>
          <img className="pho" src="https://hymanltd.com/wp-content/uploads/2021/10/7147_1.jpg" alt="" />
          <h3>Silver Wraith</h3>
          <div className="line"></div>
          </div>
        </Slider>
      </div>
    );
  }
}