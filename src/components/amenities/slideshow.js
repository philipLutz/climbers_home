import React, { Component }       from "react";
import Slider                     from "react-slick";

export default class Slideshow extends Component {
  render() {
    var settings = {
      dots: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      arrows: true,
      adaptiveHeight: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={"https://github.com/philipLutz/climbers_home/blob/master/src/hostelPhotos/bedroom3.jpg?raw=true"} alt="bedroom3" />
          </div>
          <div>
            <img src={"https://github.com/philipLutz/climbers_home/blob/master/src/hostelPhotos/climbingGym1.jpg?raw=true"} alt="climbingGym1" />
          </div>
          <div>
            <img src={"https://github.com/philipLutz/climbers_home/blob/master/src/hostelPhotos/building.jpg?raw=true"} alt="building" />
          </div>
          <div>
            <img src={"https://github.com/philipLutz/climbers_home/blob/master/src/hostelPhotos/climbingGym2.jpg?raw=true"} alt="climbingGym2" />
          </div>
          <div>
            <img src={"https://github.com/philipLutz/climbers_home/blob/master/src/hostelPhotos/climbingGym4.jpg?raw=true"} alt="climbingGym4" />
          </div>
          <div>
            <img src={"https://github.com/philipLutz/climbers_home/blob/master/src/hostelPhotos/climbingGym5.jpg?raw=true"} alt="climbingGym5" />
          </div>
          <div>
            <img src={"https://github.com/philipLutz/climbers_home/blob/master/src/hostelPhotos/bathroom.jpg?raw=true"} alt="bathroom" />
          </div>
          <div>
            <img src={"https://github.com/philipLutz/climbers_home/blob/master/src/hostelPhotos/kitchen.jpg?raw=true"} alt="kitchen" />
          </div>
        </Slider>
      </div>
    );
  }
}