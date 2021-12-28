import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.scss";
import './carousel.styles.scss';

export default class CenterMode3 extends Component {
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
      adaptiveHeight: true
    };
    return (
      <div className="slider">
       <div>
         <h2>All Time Favourites</h2>
         <Link to="/shop"><h6 id="browse">Browse now</h6></Link>
        </div>
        <Slider {...settings}>
          <div>
            <div className="item" ><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1494428973l/43641._SY475_.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394798630l/99561.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY475_.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474171184l/136251._SY475_.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg"></img></div>
          </div>
          <div>
            <div className="item"><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631251689l/4214._SY475_.jpg"></img></div>
          </div>
        </Slider>
      </div>
    );
  }
}