import React from "react";
import Wrapper from "../Wrapper";
import "./style.css";


const Editor = props => {
	return (
		<div>
			<Wrapper>
				<div className="Editor">
					<p id="text-edit">Edit the text below:</p>
					<textarea defaultValue={props.markdown}className="form-control" id="input" onChange={props.onChange}></textarea>
				</div>
			</Wrapper>
		</div>
	);
}

export default Editor