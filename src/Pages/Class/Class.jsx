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
      centerPadding: "50px",
    };
    return (
      <div className='classes'>
        <div className='classes-all'>
          <div className='classes-title'>
            <h2> LỚP HỌC PHỔ BIẾN</h2>

          </div>

          <Slider {...settings}>
            <div className='classes-option'>
              <img src="https://vtcoder-html4.surge.sh/images/GYMFITNESS.png" alt="" />
              <p className='classes-price'>420,000 Đồng/Buổi</p>
              <h1 className='classes-choose'>GYM</h1>
              <p className='classes-time'>Thứ 2 - Thứ 6 | 9.00 - 10.00</p>
              <p  className='classes-name'>Lý Đức</p>
              <p className='classes-script'>Thể dục thể hình là một bộ môn thể thao phát <br />
                triển hình thái cơ thể (mẫu người) - sự nở nang <br />
                của nhóm cơ bắp, dáng hình phát triển theo tỉ lệ
                cân đối.</p>
            </div>
            <div className='classes-option'>
              <img src="https://vtcoder-html4.surge.sh/images/pic-09.png" alt="" />
              <p className='classes-price'>420,000 Đồng/Buổi</p>
              <h1 className='classes-choose'>MMA</h1>
              <p className='classes-time'>Thứ 2 - Thứ 6 | 12.00 - 10.00</p>
              <p  className='classes-name'>Nguyễn Thuỳ Linh</p>
              <p className='classes-script'>MMA là Mixed Martial Arts được hiểu là võ thuật <br />
                tổng hợp hay võ tự do, môn thể thao mang tính <br />
                chất đối kháng toàn diện. Khi thi đấu môn võ này <br />
                thì người tham giá có thể sử dụng tất cả các đòn <br />
                như đấm, đá, vật hay kẹp...
              </p>
            </div>
            <div className='classes-option'>
              <img src="https://vtcoder-html4.surge.sh/images/boxingg.png" alt="" />
              <p className='classes-price'>420,000 Đồng/Buổi</p>
              <h1 className='classes-choose'>BOXING</h1>
              <p className='classes-time'>Thứ 2 - Thứ 6 | 12.00 - 10.00</p>
              <p  className='classes-name'>Ngô Công Phượng</p>
              <p className='classes-script'>Boxing được biết đến là một bộ môn võ thuật hay <br />
                thể thao có nguồn gốc từ phương Tây, hiện nay <br />
                du nhập đến Việt Nam và được giới trẻ rất ưa <br />
                chuộng kể cả nam hay nữ.
              </p>
            </div>
            <div className='classes-option'>
              <img src="https://vtcoder-html4.surge.sh/images/pic-07.png" alt="" />
              <p className='classes-price'>420,000 Đồng/Buổi</p>
              <h1 className='classes-choose'>MUAY THAI</h1>
              <p className='classes-time'>Thứ 2 - Thứ 6 | 12.00 - 10.00</p>
              <p  className='classes-name'>Ngô Công Phượng</p>
              <p className='classes-script'>Du nhập vào Việt Nam khoảng 5 năm, Muay Thái <br />
                nhanh chóng thu hút giới trẻ theo tập luyện, trong <br />
                đó không ít là nữ giới. <br />
                Sức mạnh bền bỉ, ra đòn chính xác là những yếu <br />
                tố cần thiết của môn võ này.
              </p>
            </div>
            <div className='classes-option'>
              <img src="https://vtcoder-html4.surge.sh/images/pic-10.png" alt="" />
              <p className='classes-price'>420,000 Đồng/Buổi</p>
              <h1 className='classes-choose'>KICK BOXING</h1>
              <p className='classes-time'>Thứ 2 - Thứ 6 | 12.00 - 10.00</p>
              <p className='classes-name'>Ngô Công Phượng</p>
              <p className='classes-script'>Kickboxing là bộ môn được kết hợp đặc biệt giữa <br />
                đấm bốc truyền thống với trường phái Muay Thái, <br />
                kết hợp chặt chẽ việc sử dụng những động tác <br />
                mạnh mẽ từ đầu gối, khuỷu tay, cẳng chân, cùi <br />
                chỏ, cùng kỹ thuật tấn công, di chuyển, mang tính <br />
                sát thương cao.
              </p>
            </div>
          </Slider>
        </div>

      </div>
    );
  }
}
