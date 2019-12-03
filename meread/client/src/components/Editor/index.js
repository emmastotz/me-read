import React from "react";
import Wrapper from "../Wrapper";
import "./style.css";


const Editor = props => {
	return (
		<Wrapper>
			<div className="Editor">
				<p>Edit the text below:</p>
				<textarea className="form-control" id="input" onChange={props.onChange}>{props.markdown}</textarea>
			</div>
		</Wrapper>
	);
}

export default Editor