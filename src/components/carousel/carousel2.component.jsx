import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.scss";
import './carousel.styles.scss';

export default class CenterMode2 extends Component {
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
        }
      ]
    };
    return (
      <div className="slider">
       <div>
         <h1>Trending</h1>
         <Link to="/shop"><h6 id="browse">Browse now</h6></Link>
        </div>
        <Slider {...settings}>
          <div>
            <div className="item" ><img src="https://www.whichbook.net/assets/bookcovers/2043.jpg?height=250&width=162&mode=crop"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://www.whichbook.net/assets/bookcovers/9928.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://www.whichbook.net/assets/bookcovers/11710.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1636409200l/59572949._SY475_.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://www.whichbook.net/assets/bookcovers/12471.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://www.whichbook.net/assets/bookcovers/11551.jpg"></img></div>
          </div>
        </Slider>
      </div>
    );
  }
}