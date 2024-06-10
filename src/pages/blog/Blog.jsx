import React from "react";
import "../../sass/Blog.scss";
import { MdArrowOutward } from "react-icons/md";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
function Blog() {
  return (
    <div className="blogsection blog">
      <p>
        <strong>Блог</strong>
      </p>
      <div className="homes">
        <div className="home">
          <img src={home1} alt="" />
          <div>
            <h4>Как правильно освещать дом снаружи?</h4>
            <MdArrowOutward size={25} />
          </div>
          <p>01.01.2024</p>
        </div>
        <div className="home">
          <img src={home2} alt="" />
          <div>
            <h4>Как правильно освещать дом снаружи?</h4>
            <MdArrowOutward size={25} />
          </div>
          <p>01.01.2024</p>
        </div>
        <div className="home">
          <img src={home3} alt="" />
          <div>
            <h4>Как правильно освещать дом снаружи?</h4>
            <MdArrowOutward size={25} />
          </div>
          <p>01.01.2024</p>
        </div>
        <div className="home">
          <img src={home1} alt="" />
          <div>
            <h4>Как правильно освещать дом снаружи?</h4>
            <MdArrowOutward size={25} />
          </div>
          <p>01.01.2024</p>
        </div>
        <div className="home">
          <img src={home2} alt="" />
          <div>
            <h4>Как правильно освещать дом снаружи?</h4>
            <MdArrowOutward size={25} />
          </div>
          <p>01.01.2024</p>
        </div>
        <div className="home">
          <img src={home3} alt="" />
          <div>
            <h4>Как правильно освещать дом снаружи?</h4>
            <MdArrowOutward size={25} />
          </div>
          <p>01.01.2024</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
