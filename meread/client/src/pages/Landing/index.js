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
            className="animated zoomIn slow delay-1s"
          />
          <h4 className="slogan animated zoomIn slow delay-2s">hyperspace readme generator</h4>
          
          <Link to="/Generator">
            <button className="btn btn-secondary start-btn">
              START
            </button>
          </Link>
        </Wrapper>
        <img
          src={BabyYoda}
          alt="Baby Yoda"
          id="baby-yoda"
          className="animated slideInUp slow delay-2s"
        />
        <Footer />
      </div>
  );
}

export default Landing;