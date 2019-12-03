import React from "react";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Logo from "../../logo.png";
import Video from "../../star_burst.mp4"
import "./style.css";
import BabyYoda from "../../baby-yoda.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
      <div>
        <Wrapper>
          <video autoPlay loop id="myVideo">
            <source src={Video} type="video/mp4"></source>
          </video>
          <img 
            src={Logo} 
            alt="meread logo"
          />
          <h4>hyperspace readme generator</h4>
          
          <Link to="/Generator">
            <button className="btn btn-secondary">
              <i className="fas fa-play-circle"></i>START
            </button>
          </Link>
        </Wrapper>
        <img
          src={BabyYoda}
          alt="Baby Yoda"
          id="baby-yoda"
        />
        <Footer />
      </div>
  );
}

export default Landing;