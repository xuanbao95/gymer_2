import React, { Component } from 'react';
import { ImClock } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import './HeaderPage.scss';
class HeaderPage extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header-red'>
                    <ImClock className='header-icon' />
                    <span>Thứ 2 - Chủ Nhật : 08:00 - 15:36</span>
                    <IoIosCall className='header-call' />
                    <span className='header-info'>0902 84 67 67 </span>
                    <FaEnvelope className='header-letter' />
                    <span className='header-info'>CSKH@bachfitness.com</span>

                </div>
                <div className='header-black'>
                    <img className='header-image' src="https://vtcoder-html4.surge.sh/images/logo-icon.png" alt="" />
                    <div className='header-list'>
                        <a href="">TRANG CHỦ</a>
                        <a href="">VỀ CHÚNG TÔI</a>
                        <a href="">LỚP HỌC</a>
                        <a href="">TẠI SAO CHỌN CHÚNG TÔI?</a>
                        <a href="">HUẤN LUYỆN VIÊN</a>
                        <a href="">BẢNG GIÁ</a>
                        <a href="">LIÊN HỆ</a>
                        
                    </div>

                </div>
            </div>
        );
    }
}

export default HeaderPage;