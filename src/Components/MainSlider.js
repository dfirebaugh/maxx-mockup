import React, { Component } from 'react';
import img1 from '../assets/hero1.jpg';
import img2 from '../assets/hero2.jpg';
import img3 from '../assets/hero3.jpg';
import img4 from '../assets/hero4.jpg';

class MainSlider extends Component {
  render(){
    return (

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="sliderOverlay">


      </ol>
      <div className="carousel-inner" role="listbox">

        <div className="carousel-item active" style={{backgroundImage: `url(${img1})`}}>
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>


        <div className="carousel-item" style={{backgroundImage: `url(${img2})`}}>
          <div className="carousel-caption d-none d-md-block">
          </div>
        </div>

        <div className="carousel-item" style={{backgroundImage: `url(${img3})`}}>
        <div className="carousel-caption d-none d-md-block">
        </div>
        </div>

        <div className="carousel-item" style={{backgroundImage: `url(${img4})`}} >
        <div className="carousel-caption d-none d-md-block">
        </div>
        </div>



        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
        </a>

      </div>
      </div>


    );
  }
}


export default MainSlider;
