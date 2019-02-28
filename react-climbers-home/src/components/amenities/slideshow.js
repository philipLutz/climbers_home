import React, { Component }       from "react";
import Slider                     from "react-slick";

export default class Slideshow extends Component {
  render() {
    var settings = {
      dots: true,
      lazyLoad: true,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 500,
      pauseOnHover: true,
      adaptiveHeight: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={} />
          </div>
          <div>
            <img src={} />
          </div>
          <div>
            <img src={} />
          </div>
          <div>
            <img src={} />
          </div>
          <div>
            <img src={} />
          </div>
          <div>
            <img src={} />
          </div>
        </Slider>
      </div>
    );
  }
}