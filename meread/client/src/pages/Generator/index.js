import React, {Component} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Video from "../../star_burst.mp4"
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Logo from "../../logo.png";
import BabyYodaGif from "../../baby-yoda1.gif";
import Navbar from "../../components/Navbar";
import API from "../../utils/API";
import "./style.css";
import marked from 'marked';
import Editor from "../../components/FreeFormTemplate/Editor/";
import BabyYodish from '../../utils/BabyYoda';

class Generator extends Component {
  constructor(){
    super()
    this.state = {
      value: "",
      copied: false,
      yodish: "",
      markdown: `# Me Read
Me Read is a hyperspace readme generator.

##### Overview/Project Outline
* server.js
* scripts
* routes
* models
* controller
* client

##### Deployment
Deployed at https://github.com/emmastotz/rebelscum

##### Created By
Alex, Chris, Emma and Eugene

##### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.`,
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

  saveTemplate = event => {
    event.preventDefault();
    API.saveTemplate({markdown:this.state.markdown}).then(res => {
      console.log("Click function working. Res below.");
      console.log(res);
      this.setState({value: res})
    });
  }

  formHandleSubmit = event => {
    event.preventDefault();
    this.setState({ yodish: '' });
    this.translateToYodish(this.state.renderedText);
  };

  translateToYodish = query => {
    let result = query.replace(/<[^>]+>/g, '').trim();
    let result2 = result.replace(/\r?\n|\r/g, '');
    BabyYodish.getYodish(result2).then((res) => {
      this.setState({ yodish: res })
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
          />
          <h4 className="slogan">hyperspace readme generator</h4>
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
                className="btn btn-secondary btns" 
                type="button"
                onClick={this.saveTemplate}>
                  Save
                </button>
                <button 
                className='btn btn-secondary btns' 
                onClick={this.formHandleSubmit}>
                  Yodish
                </button>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </Wrapper>
        <img
          src={BabyYodaGif}
          alt="Baby Yoda"
          id="baby-yoda-gif"
          className="animated bounce delay-1s"
        />
        <Footer />
      </div>
    )
  }
}

export default Generator;