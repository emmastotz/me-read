import React, {Component} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Video from "../../star_burst.mp4"
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Logo from "../../logo.png";
import BabyYoda from "../../baby-yoda.png";
import Form from "../../components/Form";
import Navbar from "../../components/Navbar";
import API from "../../utils/API";
import "./style.css";

class Generator extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      description: "",
      problem: "",
      overview: "",
      technologies: "",
      deployment: "",
      created: "",
      value: "",
      copied: false
    }
  }
  
  handleInputChange = event => {
    let fieldName = event.target.name;
    this.setState({
      [fieldName]: event.target.value
    });
  }

  handleSubmitForm = event => {
    event.preventDefault();
    API.saveTemplate(this.state).then(res => {
      console.log(res);
      this.setState({value: res})
      
    });
  }

  handleTranslation = event =>{
    event.preventDefault();
    BabyYoda.getYodish(this.state).then(res => {
      console.log(res);
    })
  }

  render(){
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
          <h4 className="slogan">hyperspace readme generator</h4>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Form data={this.state} onFormSubmit={this.handleSubmitForm} onInputChange={this.handleInputChange} />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Navbar data={this.state}/> 
              </div>
            </div>
            <div className="row button-row">
              <div className="col-2"></div>
              <div className="col-8">
                <CopyToClipboard 
                  className="btn btn-secondary btns"
                  text={this.state.value}
                  onCopy={() => this.setState({copied: true})}>
                  <button>Copy</button>
                </CopyToClipboard>
                <button 
                className="btn btn-secondary btns" 
                type="button">
                  <a href="mailto:meread@gmail.com" id="email">Email</a>
                </button>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </Wrapper>
        <img
          src={BabyYoda}
          alt="Baby Yoda"
          id="baby-yoda"
        />
        <Footer />
      </div>
    )
  }
}

export default Generator;