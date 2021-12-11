import React from "react";

import Directory from '../../components/directory/directory.component';
import Slideshow from '../../components/slider/slider.component';
import SimpleSlider from '../../components/carousel/carousel.component';

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <SimpleSlider />
    <div className="homepage2">
      <Slideshow />
      <Directory />
    </div>
  </div>
);

export default HomePage;
