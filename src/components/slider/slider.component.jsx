import React from 'react';
// import { Slide } from 'react-slideshow-image';
import './slider.styles.scss';

const colors = ["https://i.ibb.co/BL1j5t0/quote1.png", 
                "https://i.ibb.co/Rjbhs9C/quote2.png", 
                "https://i.ibb.co/ZBgxGFt/quote3.png",
                "https://i.ibb.co/MG2qBkD/quote4.png",
                "https://i.ibb.co/CwjzG2F/quote5.png",
                "https://i.ibb.co/5GF9k1K/quote6.png",
                "https://i.ibb.co/37Dt2Lz/quote7.png",
                "https://i.ibb.co/dMHXXMh/quote8.png"];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
  

      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(0, ${-index * 100}%, 0)` }}
      >
        {colors.map((Background, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${Background})` }}
          ></div>
        ))}
      </div>

    </div>
  );
}

export default Slideshow;