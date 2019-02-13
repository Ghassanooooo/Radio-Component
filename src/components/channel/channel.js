import React, { Component } from "react";
import "./channel.css";
import ChannelDetails from "./channelDetails/channelDetails";
import Footer from "../footer/footer";

class Channel extends Component {
  render() {
    return (
      <div
        className="Channel"
        onClick={() => this.props.onSelectChannelHandler(this.props.id)}
      >
        {this.props.radio.isOpen ? (
          <ChannelDetails image={this.props.radio.image} />
        ) : null}
        <div className="wraperDiv">
          <p>{this.props.radio.name}</p>
          <p>{this.props.radio.frequency}</p>
        </div>
        {this.props.radio.isOpen ? (
          <Footer name={this.props.radio.name} />
        ) : null}
      </div>
    );
  }
}

export default Channel;
