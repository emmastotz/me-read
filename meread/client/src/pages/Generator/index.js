import React, {Component} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Video from "../../star_burst.mp4"
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Logo from "../../logo.png";
import BabyYoda from "../../baby-yoda.png";
import Navbar from "../../components/Navbar";
import API from "../../utils/API";
import "./style.css";
import marked from 'marked';
import Editor from "../../components/Editor/";
import BabyYodish from '../../utils/BabyYoda';

class Generator extends Component {
  constructor(){
    super()
    this.state = {
      value: "",
      copied: false,
      yodish: "",
      markdown: `
#Foobar

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
  
  handleInputChange = event => {
    let fieldName = event.target.name;
    this.setState({
      [fieldName]: event.target.value
    });
  }

  handleSubmitForm = event => {
    event.preventDefault();
    API.saveTemplate(this.state).then(res => {
      console.log(res);
      this.setState({value: res})
      
    });
  }

  handleTranslation = event =>{
    event.preventDefault();
    BabyYoda.getYodish(this.state).then(res => {
      console.log(res);
    })
  }

  formHandleSubmit = event => {
    event.preventDefault();
    console.log('Going for the baby Yoda!');
    this.setState({ yodish: '' });
    this.translateToYodish(this.state.renderedText);
  };

  translateToYodish = query => {
    console.log(query);
    let result = query.replace(/<[^>]+>/g, '').trim();
    let result2 = result.replace(/\r?\n|\r/g, '');
    console.log(result2);
    BabyYodish.getYodish(result2).then((res) => {
      console.log(res);
      console.log('above is the full res');
      this.setState({ yodish: res })
      console.log('Below is Yodish');
      console.log(this.state.yodish);
    })
      .catch(err => console.log(err));
  };

  render(){

    const handleChange = (event) => {
			this.setState({
				markdown: event.target.value,
				renderedText: marked(event.target.value)
			})
		}
    return (
      <div>
        <Wrapper>
          <video autoPlay loop id="myVideo">
            <source src={Video} type="video/mp4"></source>
          </video>
          <img 
            src={Logo} 
            alt="meread logo"
            className="animated zoomIn slow delay-1s"
          />
          <h4 className="slogan animated zoomIn slow delay-2s">hyperspace readme generator</h4>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Editor markdown={this.state.markdown} onChange={handleChange}/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Navbar data={this.state}/> 
              </div>
            </div>
            <div className="row button-row">
              <div className="col-2"></div>
              <div className="col-8">
                <CopyToClipboard 
                  className="btn btn-secondary btns"
                  text={this.state.markdown}
                  onCopy={() => this.setState({copied: true})}>
                  <button>Copy</button>
                </CopyToClipboard>
                <button 
                className="btn btn-secondary btns" 
                type="button">
                  <a href="mailto:meread@gmail.com" id="email">Email</a>
                </button>
                <button 
                className='btn btn-secondary btns' 
                onClick={this.formHandleSubmit}>
                  Baby Yoda
                </button>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </Wrapper>
        <img
          src={BabyYoda}
          alt="Baby Yoda"
          id="baby-yoda"
          className="animated slideInUp slow delay-2s"
        />
        <Footer />
      </div>
    )
  }
}

export default Generator;