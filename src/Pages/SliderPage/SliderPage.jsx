import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderPage.scss";

class SliderPage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}>
          <div className="slider-wrap">
            <img
              src="https://vtcoder-html4.surge.sh/images/slider-bg-image-2.jpg"
              alt=""
            />
            <div className="slider-content">
              <h1>HOÀN THIỆN BẢN THÂN BẠN</h1>
              <p>
                Được ra đời với tiêu chí là điểm đến yêu thích của những người
                đam mê tập luyện theo một cách khoa học và có đam mê cháy bỏng
                muốn thay đổi bản thân, BACH FITNESS CENTER ra đời cung cấp giải
                pháp toàn diện cho mọi nhu cầu thay đổi vóc dáng, sức khoẻ của
                bạn.
              </p>
              <h3>Bắt đầu chỉ 399,000 Đồng/Tháng</h3>
              <button>Đăng Ký Ngay</button>
            </div>
          </div>
          <div className="slider-wrap">
            <img
              src="https://vtcoder-html4.surge.sh/images/slider-bg-image.jpg"
              alt=""
            />
            <div className="slider-content">
              <h1>HOÀN THIỆN BẢN THÂN BẠN</h1>
              <p>
                Được ra đời với tiêu chí là điểm đến yêu thích của những người
                đam mê tập luyện theo một cách khoa học và có đam mê cháy bỏng
                muốn thay đổi bản thân, BACH FITNESS CENTER ra đời cung cấp giải
                pháp toàn diện cho mọi nhu cầu thay đổi vóc dáng, sức khoẻ của
                bạn.
              </p>
              <h3>Bắt đầu chỉ 399,000 Đồng/Tháng</h3>
              <button>Đăng Ký Ngay</button>
            </div>
          </div>
          <div className="slider-wrap">
            <img
              src="https://vtcoder-html4.surge.sh/images/slider-bg-image.jpg"
              alt=""
            />
            <div className="slider-content">
              <h1>HOÀN THIỆN BẢN THÂN BẠN</h1>
              <p>
                Được ra đời với tiêu chí là điểm đến yêu thích của những người
                đam mê tập luyện theo một cách khoa học và có đam mê cháy bỏng
                muốn thay đổi bản thân, BACH FITNESS CENTER ra đời cung cấp giải
                pháp toàn diện cho mọi nhu cầu thay đổi vóc dáng, sức khoẻ của
                bạn.
              </p>
              <h3>Bắt đầu chỉ 399,000 Đồng/Tháng</h3>
              <button>Đăng Ký Ngay</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SliderPage;
