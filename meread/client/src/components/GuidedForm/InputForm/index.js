import React from "react";
import "./style.css";

function Form(props){

  return (
    <>
    <div className="container jumbotron">
      <form className="form">
        <div className="form-group">
          <h6>App Name</h6>
          <input
            value={props.data.name}
            name="name"
            onChange={props.onInputChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <h6>App Description</h6>
          <input
            value={props.data.description}
            name="description"
            onChange={props.onInputChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <h6>Problem/Solution</h6>
          <textarea
            value={props.data.problem}
            name="problem"
            onChange={props.onInputChange}
            type="text"
            className="form-control"
            rows="2"
          />
        </div>
        <div className="form-group">
          <h6>Overview/Project Outline</h6>
          <textarea
            value={props.data.overview}
            name="overview"
            onChange={props.onInputChange}
            type="text"
            className="form-control"
            rows="5"
          />
        </div>
        <div className="form-group">
          <h6>Technologies Used</h6>
          <textarea
            value={props.data.technologies}
            name="technologies"
            onChange={props.onInputChange}
            type="text"
            className="form-control"
            rows="5"
          />
        </div>
        <div className="form-group">
          <h6>Link to Deployment</h6>
          <input
            value={props.data.deployment}
            name="deployment"
            onChange={props.onInputChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <h6>Created By</h6>
          <input
            value={props.data.created}
            name="created"
            onChange={props.onInputChange}
            type="text"
            className="form-control"
          />
        </div>
      </form>
    </div>
    </>
  );
}

export default Form;