import React from "react"

const Editor = props => {
	return (
		<div className="Editor">
			<p>Edit the text below:</p>
			<textarea id="input" onChange={props.onChange}>{props.markdown}</textarea>
		</div>
	);
}

export default Editor