import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>currently playing</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Footer;
