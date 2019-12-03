import React, {Component} from "react";
import DisplayForm from "../DisplayForm";
import HTMLForm from "../HTMLForm";
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
    this.setState({tabClicked: "html"});
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
              <li onClick={() => changeTab('html')} className={getNavClass("html")}>
                HTML
              </li>
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
        { this.state.tabClicked === "html" && 
            <HTMLForm data={this.props.data} />
          }
          { this.state.tabClicked === "output" && 
            <DisplayForm data={this.props.data} />
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
