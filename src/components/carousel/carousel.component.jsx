import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.scss";
import './carousel.styles.scss';

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 500,
      dots: true
    };
    return (
      <div className="slider">
       <div>
         <h2>Todays specials</h2>
         <Link to="/shop"><h6>Browse now</h6></Link>
        </div>
        <Slider {...settings}>
          <div>
            <div className="item" style={{ backgroundImage: `url(https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=)`, backgroundSize:`cover` }}>1</div>
          </div>
          <div>
            <div className="item">2</div>
          </div>
          <div>
            <div className="item">3</div>
          </div>
          <div>
            <div className="item">4</div>
          </div>
          <div>
            <div className="item">5</div>
          </div>
          <div>
            <div className="item">6</div>
          </div>
        </Slider>
      </div>
    );
  }
}