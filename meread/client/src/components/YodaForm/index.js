import React from "react";
import Wrapper from "../Wrapper";
import "./style.css";

function YodaForm(props){
  console.log(props);

  let renderedHtml = {__html: props.yodish};

  return (
    <div>
      <Wrapper>
        <div className="container display-form">
          {props.yodish === '' && 
            <h6>Click Baby Yoda below to translate your readme into Yodish.</h6>
          }
        
          {props.yodish.length > 0 &&
            <h6 dangerouslySetInnerHTML={renderedHtml}></h6>
          }
        </div>
      </Wrapper>
    </div>
  );
};

export default YodaForm;
