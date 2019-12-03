import React, {Component} from "react";
import Preview from "../Preview";
import YodaForm from "../YodaForm";
import "./style.css";

class Navbar extends Component {
  constructor(props){
    super()
    this.state = {
      tabClicked: ""
    }
  }

  componentDidMount(){
    this.setState({tabClicked: "output"});
  }

  render(){

    const getNavClass = ( tabName => {
      if(tabName === this.state.tabClicked){
        return "nav-item nav-link active";
      } else {
        return "nav-item nav-link"
      }
    })

    const changeTab = ( newTab => {
      this.setState({tabClicked: newTab});
    });

    return (
      <div className="container jumbotron">
        <nav className="navbar">
          <div>
            <ul className="nav nav-tabs">
              <li onClick={() => changeTab('output')} className={getNavClass("output")}>
                Output
              </li>
              <li onClick={() => changeTab('babyYoda')} className={getNavClass("babyYoda")}>
                Baby Yoda
              </li>
            </ul>
          </div>
        </nav>

        <div className="display-area">
          { this.state.tabClicked === "output" && 
            <Preview renderedText={this.props.data.renderedText}/>
            // <DisplayForm data={this.props.data} />
          }
          { this.state.tabClicked === "babyYoda" && 
            <YodaForm data={this.props.data} />
          }
        </div>
      </div>
    )
  }
}

export default Navbar;
