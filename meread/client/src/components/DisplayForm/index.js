import React from "react";
import Wrapper from "../Wrapper";
import "./style.css";

function DisplayForm(props){
  console.log(props);

  return (
    <div>
      <Wrapper>
        <div className="container display-form">
          <h3>App Name: {props.data.name}</h3>
          <h5>App Description: {props.data.description}</h5>
          <h5>Problem/Solution: {props.data.problem}</h5>
          <h5>App Overview: {props.data.overview}</h5>
          <h5>Technologies: {props.data.technologies}</h5>
          <h5>Deployed At: {props.data.deployment}</h5>
          <h5>Created By: {props.data.created}</h5>
        </div>
      </Wrapper>
    </div>
  );
};

export default DisplayForm;
