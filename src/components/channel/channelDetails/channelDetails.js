import React, { Component } from "react";
import "./channelDetails.css";

class ChannelDetails extends Component {
  render() {
    return (
      <div className="ChannelDetails">
        <div className="Controls">
          {" "}
          <span>
            {" "}
            <i className="fas fa-minus" />
          </span>
        </div>

        <img src={this.props.image} alt=" Channel Details" />

        <div className="Controls">
          {" "}
          <span>
            {" "}
            <i className="fas fa-plus" />
          </span>
        </div>
      </div>
    );
  }
}

export default ChannelDetails;
