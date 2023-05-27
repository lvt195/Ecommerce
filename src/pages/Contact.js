import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content1 text-sm font-semibold">
        <h2>CONTACT</h2>
        <h4>Chăm sóc khách hàng là niềm vui của chúng tôi!</h4>
      </div>
      <div className="contact-content2 ">
        <div className="contact-element flex ">
          <div className="contact-element-info ">
            <h2>Cửa hàng 1</h2>
            <p>Địa chỉ: 96A Trần Phú, P. Mộ Lao, Hà Đông, Hà Nội, Việt Nam</p>
            <span>Điện thoại: 0910201900</span>
            <span>Gmail: shopptit@gmail.com</span>
            <span>
              Website:
              <a href="">Thời trang nam Samantha</a>
            </span>
          </div>

          <div className="contact-element-info">
            <h2>Cửa hàng 2</h2>
            <p>
              Địa chỉ: 122 Hoàng Quốc Việt, Cổ Nhuế, Cầu Giấy, Hà Nội, Việt Nam
            </p>
            <span>Điện thoại: 0966868686</span>
            <span>Gmail: shopptit@gmail.com</span>
            <span>
              Website:
              <a href="">Thời trang nam Samantha</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
