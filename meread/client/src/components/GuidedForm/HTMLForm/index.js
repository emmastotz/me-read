import React from "react";
import Wrapper from "../../Wrapper";
import "./style.css";

function DisplayForm(props){
  console.log(props);

  return (
    <div>
      <Wrapper>
        <div className="container display-form">
          <h3>{props.data.name}</h3>
          <p>{props.data.description}</p>
          <h6>Problem/Solution</h6>
          <p>{props.data.problem}</p>
          <h6>{props.data.name} Overview:</h6>
          <ul>
            <li>{props.data.overview}</li>
          </ul>
          <h6>Technologies Used:</h6>
          <ul>
            <li>{props.data.technologies}</li>
          </ul>
          <h6>Deployed at:
            <a href={props.data.deployment}> {props.data.deployment} </a>
          </h6>
          <h6>This app was created by {props.data.created}</h6>
        </div>
      </Wrapper>
    </div>
  );
};

export default DisplayForm;
