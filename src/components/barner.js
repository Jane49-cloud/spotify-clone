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
            Home <span>Popular artist</span> <span></span>
            <i>
            <FaEllipsisH />
          </i>
          </p>
         
        </div>
        <div className="artist-section">
          <div className="left">
            <div className="name">
                <h4>Picture-perfect</h4>
              {/* <img src={check} alt="" className="check-img" height={40} width={40}/> */}
            
            </div>
            <div className="more">
            <p>
              <i>
                <FaHeadphones color="white"/>
                111000 <span>Monthly listeners</span>
              </i>
            </p>
            </div>
          </div>
          <div className="right" style={{ float:"right", marginTop: '134px', marginRight: '40px'}}>
            <a href="#"   style={{color: "white", textDecoration:'none' , fontSize : '20px',  background:'green' , borderRadius:"0.51rem" ,marginRight:"20px",  boxSizing:"border-box"}} > <span></span> Play  <span>  </span> <span></span></a>
            <a href="#"  style={{color: "green" ,  textDecoration:'none', fontSize : '20px', background:'white' , borderRadius:"0.51rem" ,marginRight:"10px",  boxSizing:"border-box"}} ><FaCheck color="green" /> Following <span></span>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-layer"></div>
    </div>
  );
};

export default Banner;
