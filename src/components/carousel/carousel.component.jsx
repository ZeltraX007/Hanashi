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
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 500,
      dots: false,
      infinite: true,
      focusOnSelect: true,
      adaptiveHeight: true,
      mobileFirst:true,
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 4000,
          settings: {
            centerPadding: "300px",
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 535,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 0
          }
        }
      ]
    };
    return (
      <div className="slider">
       <div>
         <h1>New Releases</h1>
         <Link to="/shop"><h6 id="browse">Browse now</h6></Link>
        </div>
        <Slider {...settings}>
          <div>
            <div className="item" ><img src="https://m.media-amazon.com/images/I/515uo-Yp0UL.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/433/9781250044433.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/868/9781492666868.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/132/9780316316132.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/933/9781501161933.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/624/9780062060624.jpg"></img></div>
          </div>
        </Slider>
      </div>
    );
  }
}