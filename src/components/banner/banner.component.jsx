import React, {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./banner.styles.scss";

const Banner = () =>{
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
    return (
    <div className="banner" data-aos="fade-up">
      <div class="column-5 w-col w-col-6"><h2 class="header-1"></h2></div>
      <div class="column-6 w-col w-col-6"><h2 class="header-1"></h2></div>
      </div>)
}

export default Banner;

