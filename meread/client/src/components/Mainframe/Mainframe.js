import React, {Component} from "react";
import Editor from "./Editor";
import Preview from "./Preview";
var marked = require('marked');

class Mainframe extends Component {
    constructor(props) {
		super(props);
		this.state = {
			markdown: `
# Foobar

Foobar is a Python library for dealing with word pluralization.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

Bash
pip install foobar

## Usage

python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)`,
			renderedText: ""
		}
	}

    componentDidMount = () => {
        this.setState({renderedText: marked(this.state.markdown)});
    }

	render() {
	
		const handleChange = (event) => {
			// let textFromTextArea = document.getElementById("input").value;
			// let currentMarkdown = marked(this.state.text);
			this.setState({
				markdown: event.target.value,
				renderedText: marked(event.target.value)
			})
		}

		return (
			<div className="Main-frame">
				<Editor markdown={this.state.markdown} onChange={handleChange}/>
				<Preview renderedText={this.state.renderedText}/>
			</div>
		)
	}
}

export default Mainframe