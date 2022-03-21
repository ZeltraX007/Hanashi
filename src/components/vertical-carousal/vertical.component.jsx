import React, { Component } from "react";
import Slider from "react-slick";
import './vertical.styles.scss'
export default class VerticalMode extends Component {
  render() {
    const settings = {

      infinite: true,
      fade:true,
      autoplay: true,
      autoplaySpeed: 1500,
      slidesToShow: 1,
      vertical: true,
      pauseOnHover: true,
      arrows:false,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return ( 
   
      <div className="slide-show">
        
        <Slider {...settings}>
          <div><h3>Books are</h3></div>  
           <div><h3>the plane</h3></div>
          <div>
            <h3>and the train</h3>
          </div>
          <div>
            <h3>and the road</h3>
          </div>
          <div>
            <h3>they are the destination</h3>
          </div>
          <div>
            <h3>and the journey</h3>
          </div>
          <div>
            <h3>THEY ARE HOME</h3>
          </div>
        </Slider></div>
      
    );
  }
}