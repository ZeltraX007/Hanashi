import React from "react";

import Directory from '../../components/directory/directory.component';
import Slideshow from '../../components/slider/slider.component';
import SimpleSlider from '../../components/carousel/carousel.component';
import VerticalMode from '../../components/vertical-carousal/vertical.component'
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <SimpleSlider />
    <div className="homepage2">
      <VerticalMode className="slideshow"/>
      <Directory />
    </div>
  </div>
);

export default HomePage;
