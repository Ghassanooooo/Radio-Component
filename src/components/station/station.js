import React, { Component } from "react";
import "./station.css";

class Station extends Component {
  render() {
    return (
      <div className="Station">
        <span className="StationText">
          {" "}
          <i className="fas fa-chevron-left " />
        </span>

        <p className="StationText">Station</p>
        <span className="StationText" onClick={this.props.turnOff}>
          {" "}
          <i className="fas fa-power-off " />
        </span>
      </div>
    );
  }
}

export default Station;
