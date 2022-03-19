import React from "react";
import CenterMode2 from "../../components/carousel/carousel2.component";
import CenterMode3 from "../../components/carousel/carousel3.component";
import CenterMode4 from "../../components/carousel/carousel4.component";
import Directory from '../../components/directory/directory.component';
import Slideshow from '../../components/slider/slider.component';
import Banner from '../../components/banner/banner.component'
import Footer from "../../components/footer/footer.component"
import SimpleSlider from '../../components/carousel/carousel.component';
import VerticalMode from '../../components/vertical-carousal/vertical.component';
import SearchBar from '../../components/searchbar/search.component'
import "./homepage.styles.scss";

export default function Homepage({ history }) {
  return(
  <div>
    <div className="homepage">
      <SearchBar />
      <SimpleSlider />
      <div className="homepage2">
        <VerticalMode className="slideshow"/>
        <Directory />
      </div>
    <Banner />
      <CenterMode2 />
      <CenterMode3 />
      <CenterMode4 />
    </div>
    <Footer className="footer"/>
  </div>
  )
  
}

