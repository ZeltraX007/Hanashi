import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.scss";
import './carousel.styles.scss';

export default class CenterMode4 extends Component {
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
        },
      ]
    };
    return (
      <div className="slider">
       <div>
         <h2>Editor's Choice</h2>
         <Link to="/shop"><h6 id="browse">Browse now</h6></Link>
        </div>
        <Slider {...settings}>
          <div>
            <div className="item" ><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470427482l/27362503._SY475_.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465563623l/27883214.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/868/9781492666868.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1486837149l/131359._SY475_.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579621267l/968.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466865542l/18144590._SY475_.jpg"></img></div>
          </div>
        </Slider>
      </div>
    );
  }
}