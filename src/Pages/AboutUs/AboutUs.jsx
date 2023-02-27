import React, { Component } from "react";
import { Container } from "@mui/material";
import "./AboutUs.scss";

class AboutUs extends Component {
  render() {
    return (
      <div className="aboutUs">
        <Container>
          <div className="aboutUs-title">Về chúng tôi</div>
          <div className="aboutUs-content">
            <p>
              BACH FITNESS CENTER là một trung tâm thể hình đẳng cấp được ra đời
              với mục đích cung cấp giải pháp toàn diện cho mọi nhu cầu thay đổi
              vóc dáng, sức khoẻ của bạn. Đến với BACH FITNESS CENTER khách hàng
              được trải nghiệm các dịch vụ trọn gói miễn phí như tư vấn dinh
              dưỡng, chương trình huấn luyện cá nhân, sự đa dạng về các khóa
              học, khăn tập, nước khoáng Lavie, giữ xe, tạp chí, internet, tủ cá
              nhân… Trung tâm có sự đội ngũ giáo viên, hướng dẫn viên nhiệt
              tình, giàu kinh nghiệm, am hiểu về chế độ luyện tập, sức khỏe và
              thể chất con người. Bạn sẽ được thiết lập một chế độ luyện tập
              riêng phù hợp, nhanh chóng đạt hiệu quả như mong muốn.
            </p>
            <ul>
              <li className="photo-customer">
                <h3>CHÍNH SÁCH KHÁCH HÀNG:</h3>
                <p>
                  BACH FITNESS CENTER Chào Mừng Các Thành Viên Ở Mọi Độ Tuổi Có
                  Khát Khao Và Niềm Mong Muốn Thay Đổi Bản Thân Và Nhu Cầu Sức
                  Khoẻ, Làm Đẹp.
                </p>
              </li>
              <li className="photo-insurance">
                <h3>CHÍNH SÁCH BẢO HIỂM:</h3>
                <p>
                  Mỗi Hội Viên Sẽ Hoàn Toàn Yên Tâm Với Chương Trình Bảo Hiểm
                  Rủi Ro Trong Phòng Tập.
                </p>
              </li>
              <li className="photo-personal-coach">
                <h3>HUẤN LUẬN VIÊN CÁ NHÂN</h3>
                <p>
                  Đội Ngũ Huấn Luyện Viên Được Tuyển Chọn Kĩ Lưỡng Và Đào Tạo
                  Theo Chương Trình Khoa Học Và Chuyên Nghiệp. Họ Luôn Cố Gắng
                  Hết Sức Để Đáp Ứng Các Thử Thách Về Hình Thể Cho Từng Đối
                  Tượng Khách Hàng Khác Nhau.
                </p>
              </li>
            </ul>
          </div>
        </Container>
        <div className="photo-gymer">
          <img
            src="https://vtcoder-html4.surge.sh/images/about-img.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default AboutUs;
