import React, { Component, Fragment } from "react";
import "./App.css";
import Station from "./components/station/station";
import Channel from "./components/channel/channel";
import Footer from "./components/footer/footer";
import Spinner from "./components/spinner/spinner";
import axios from "axios";

class App extends Component {
  state = {
    radios: null
  };

  componentDidMount() {
    axios
      .get("https://teclead.de/recruiting/radios")
      .then(res => this.setState({ radios: res.data.radios }));
  }
  render() {
    return (
      <div className="App">
        <Station />
        {this.state.radios ? (
          this.state.radios.map(radio => (
            <Fragment>
              <Channel
                radio={radio}
                selectChannel={this.state.selectChannel}
                onSelectChannelHandler={this.onSelectChannelHandler}
              />
            </Fragment>
          ))
        ) : (
          <div style={{ paddingTop: 120 }}>
            {" "}
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}

export default App;
