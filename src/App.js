import React, { Component } from "react";
import "./App.css";
import Station from "./components/stations/stations";
import Channel from "./components/channel/channel";
import ChannelDetails from "./components/channelDetails/channelDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Station />
        <Channel />
        <ChannelDetails />
      </div>
    );
  }
}

export default App;
