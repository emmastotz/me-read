import React, {Component} from "react";
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
      created: ""
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
    });
  }

  render(){
    return (
      <div>
        <Wrapper>
          <img 
            src={Logo} 
            alt="meread logo"
          />
          <h4>hyperspace readme generator</h4>
            <Form data={this.state} onFormSubmit={this.handleSubmitForm} onInputChange={this.handleInputChange} />
          <div>
            <Navbar data={this.state}/> 
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