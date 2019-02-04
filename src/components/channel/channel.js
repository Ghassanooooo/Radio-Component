import React, { Component } from "react";
import "./channel.css";
import ChannelDetails from "./channelDetails/channelDetails";
import Footer from "../footer/footer";

class Channel extends Component {
  state = {
    selectChannel: false
  };
  onSelectChannelHandler = () => {
    this.setState({ selectChannel: !this.state.selectChannel });
  };
  render() {
    return (
      <div className="Channel" onClick={this.onSelectChannelHandler}>
        {this.state.selectChannel ? (
          <ChannelDetails image={this.props.radio.image} />
        ) : null}
        <div className="wraperDiv">
          <p>{this.props.radio.name}</p>
          <p>{this.props.radio.frequency}</p>
        </div>
        {this.state.selectChannel ? (
          <Footer name={this.props.radio.name} />
        ) : null}
      </div>
    );
  }
}

export default Channel;
