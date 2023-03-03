import React, { Component } from 'react';
import Slider from "react-slick";
import './Class.scss'
export default class Class extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
       autoplaySpeed: 30000,
       centerPadding:"50px",
    };
    return (
      <div className='classes'>
        <div className='classes-all'>
          <div  className='classes-title'>
          <h2> LỚP HỌC PHỔ BIẾN</h2>
          </div>
       
        <Slider {...settings}>
          <div className='classes-option'>
            <img src="https://vtcoder-html4.surge.sh/images/GYMFITNESS.png" alt="" />
            <p>420,000 Đồng/Buổi</p>
            <h1>GYM</h1>
            <p>Thứ 2 - Thứ 6 | 9.00 - 10.00</p>
            <p>Lý Đức</p>
            <p>Thể dục thể hình là một bộ môn thể thao phát <br />
              triển hình thái cơ thể (mẫu người) - sự nở nang <br />
              của nhóm cơ bắp, dáng hình phát triển theo tỉ lệ  <br />
              <br /> cân đối.</p>
          </div>
          <div  className='classes-option'>
          <img src="https://vtcoder-html4.surge.sh/images/pic-09.png" alt="" />
            <p>420,000 Đồng/Buổi</p>
            <h1>MMA</h1>
            <p>Thứ 2 - Thứ 6 | 9.00 - 10.00</p>
            <p>Lý Đức</p>
            <p>Thể dục thể hình là một bộ môn thể thao phát <br />
              triển hình thái cơ thể (mẫu người) - sự nở nang <br />
              của nhóm cơ bắp, dáng hình phát triển theo tỉ lệ  <br />
              <br /> cân đối.</p>
          </div>
          <div  className='classes-option'>
          <img src="https://vtcoder-html4.surge.sh/images/boxingg.png" alt="" />
            <p>420,000 Đồng/Buổi</p>
            <h1>BOXING</h1>
            <p>Thứ 2 - Thứ 6 | 9.00 - 10.00</p>
            <p>Lý Đức</p>
            <p>Thể dục thể hình là một bộ môn thể thao phát <br />
              triển hình thái cơ thể (mẫu người) - sự nở nang <br />
              của nhóm cơ bắp, dáng hình phát triển theo tỉ lệ  <br />
              <br /> cân đối.</p>
          </div>
          <div  className='classes-option'>
          <img src="https://vtcoder-html4.surge.sh/images/pic-07.png" alt="" />
            <p>420,000 Đồng/Buổi</p>
            <h1>MUAY THAI</h1>
            <p>Thứ 2 - Thứ 6 | 9.00 - 10.00</p>
            <p>Lý Đức</p>
            <p>Thể dục thể hình là một bộ môn thể thao phát <br />
              triển hình thái cơ thể (mẫu người) - sự nở nang <br />
              của nhóm cơ bắp, dáng hình phát triển theo tỉ lệ  <br />
              <br /> cân đối.</p>
          </div>
          <div  className='classes-option'>
          <img src="https://vtcoder-html4.surge.sh/images/pic-10.png" alt="" />
            <p>420,000 Đồng/Buổi</p>
            <h1>KICK BOXING</h1>
            <p>Thứ 2 - Thứ 6 | 9.00 - 10.00</p>
            <p>Lý Đức</p>
            <p>Thể dục thể hình là một bộ môn thể thao phát <br />
              triển hình thái cơ thể (mẫu người) - sự nở nang <br />
              của nhóm cơ bắp, dáng hình phát triển theo tỉ lệ  <br />
              <br /> cân đối.</p>
          </div>
        </Slider>
        </div>
        
      </div>
    );
  }
}
