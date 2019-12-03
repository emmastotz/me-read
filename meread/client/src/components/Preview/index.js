import React from "react"
import Wrapper from "../Wrapper";
import "./style.css";

const Preview = props => {
	return (
		<div>
			<Wrapper>
				<div className="container">
					{/* <Preview rendered={this.props.rendered}/> */}
					<div className="Preview" dangerouslySetInnerHTML={{__html: props.renderedText}}></div>
				</div>
			</Wrapper>
		</div>
	);
}

export default Preview