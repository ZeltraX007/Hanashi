import React, {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./banner.styles.scss";

const Banner = () =>{
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
    return (
    <div>
      {/*<div class="column-5 w-col w-col-6"><h2 class="header-1"><img src="https://images-na.ssl-images-amazon.com/images/I/51vL6VHd5rS._SX324_BO1,204,203,200_.jpg"></img></h2></div>
      <div class="column-6 w-col w-col-6"><h2 class="header-1"><i>Jeff Kinney</i> is a #1 New York Times bestselling author of the Diary of a Wimpy Kid series and the Awesome Friendly Kid series. He is a six-time Nickelodeon Kids' Choice Award winner for Favorite Book and has been named one of Time magazine's 100 Most Influential People in the World. He spent his childhood in the Washington, D.C., area and moved to New England, where he and his wife own a bookstore named An Unlikely Story.</h2></div>
    */}
    {/* 01824406655 */}

    </div>)
}

export default Banner;

