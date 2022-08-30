import React from "react";
import check from "../images/check1.jpg";
import artist from "../images/musician2.jpg";
import { FaCheck, FaHeadphones, FaEllipsisH } from "react-icons/fa";

const Banner = (props) => {
  return (
    <div className="banner">
      <img src={artist} alt={artist} className="banner-img" />
      <div className="content">
        <div className="breadcrum">
          <p>
            Home <span>Popular artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className="artist-section">
          <div className="left">
            <div className="name">
                <h2>Name</h2>
              {/* <img src={check} alt="" className="check-img"/> */}
            
            </div>
            <p>
              <i>
                <FaHeadphones />
                111000 <span>Monthly listeners</span>
              </i>
            </p>
          </div>
          <div className="right">
            <a href="#">play</a>
            <a href="#">
              <FaCheck /> Following
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-layer"></div>
    </div>
  );
};

export default Banner;
