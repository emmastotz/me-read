import React from "react"

const Preview = props => {
	return (
		<>
			{/* <Preview rendered={this.props.rendered}/> */}
			<div className="Preview" dangerouslySetInnerHTML={{__html: props.renderedText}}></div>
		</>
	);
}

export default Preview