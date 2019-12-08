import React from "react";
import Wrapper from "../../Wrapper";
import "./style.css";

function HTMLForm(props){
  console.log(props);

  return (
    <div>
      <Wrapper>
        <div className="container">
          <p>### **{props.data.name}**</p>
          <p>#### {props.data.description}</p>
          <p>##### Problem/Solution:</p> 
          <p>{props.data.problem}</p>
          <p>##### {props.data.name} Overview: </p>
          <ul>
            * {props.data.overview}
          </ul>
          <p>##### Technologies Used: </p>
          <ul>
            * {props.data.technologies}
          </ul>
          <p>##### Deployed at: {props.data.deployment}</p>
          <p>This app was created by {props.data.created}</p>
        </div>
      </Wrapper>
    </div>
  );
};

export default HTMLForm;