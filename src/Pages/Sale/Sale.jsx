import React, { Component } from 'react'
import './Sale.scss'

export default class Sale extends Component {
  render() {
    return (
      <div className='sale'>
        <div className='sale-left'>
            <img src="https://vtcoder-html4.surge.sh/images/offer-img.png" alt="" />
        </div>
        <div className='sale-right'>
          <h3>Khuyến Mãi Đặc Biệt</h3>
          <h1>GIẢM GIÁ</h1>
          <h1 className='sale-off'>30%</h1>
          <p>VỚI GÓI DỊCH VỤ HÀNG NĂM. SỐ LƯỢNG GIỚI HẠN</p>
          <a>ĐĂNG KÝ NGAY</a>
        </div>
      </div>
    )
  }
}
