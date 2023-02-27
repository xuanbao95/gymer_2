import React, { Component } from 'react'
import './Carousel.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
    render() {
        var settings = {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 30000,
          pauseOnHover: true
        };
        return (
          <div className='carousel'>
            <Slider {...settings}>
              <div className='carousel-image-MMA'>
                <img src="https://vtcoder-html4.surge.sh/images/MMA.png" alt="" />
                <p>399,000 ĐỒNG/THÁNG</p>
                <h2>MMA</h2>
              </div>
              <div className='carousel-image-MMA'>
              <img src="https://vtcoder-html4.surge.sh/images/Muay.png" alt="" />
              <p>399,000 ĐỒNG/THÁNG</p>
                <h2>MUAY THAI</h2>
              </div>
              <div className='carousel-image-MMA'>
              <img src="https://vtcoder-html4.surge.sh/images/kickboxing.png" alt="" />
              <p>399,000 ĐỒNG/THÁNG</p>
                <h2>KICK BOXING</h2>
              </div>
              <div className='carousel-image-MMA'>
              <img src="https://vtcoder-html4.surge.sh/images/Boxing.png" alt="" />
              <p>399,000 ĐỒNG/THÁNG</p>
                <h2>BOXING</h2>
              </div>
              <div className='carousel-image-MMA'>
              <img src="https://vtcoder-html4.surge.sh/images/gym-fitness.jpg" alt="" />
              <p>399,000 ĐỒNG/THÁNG</p>
                <h2>GYM & FITNESS</h2>
              </div>
            </Slider>
          </div>
        );
      }
}
