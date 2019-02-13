import React, { Component, Fragment } from "react";
import "./App.css";
import Station from "./components/station/station";
import Channel from "./components/channel/channel";
import Spinner from "./components/spinner/spinner";
import axios from "axios";

class App extends Component {
  state = {
    radios: null
  };

  onSelectChannelHandler = id => {
    const CloneState = [...this.state.radios];
    const checkIsOpen = CloneState.map((item, index) =>
      id === index ? { ...item, isOpen: true } : { ...item, isOpen: false }
    );
    this.setState({ radios: checkIsOpen });
  };

  onturnOffHandler = () => {
    const CloneState = [...this.state.radios];
    const setIsOpenToFalse = CloneState.map(item => {
      return { ...item, isOpen: false };
    });
    this.setState({ radios: setIsOpenToFalse });
  };

  componentDidMount() {
    axios.get("https://teclead.de/recruiting/radios").then(res => {
      let setNewValueInData = res.data.radios.map(i => {
        return { ...i, isOpen: false };
      });

      this.setState({ radios: setNewValueInData });
    });
  }
  render() {
    return (
      <div className="App">
        <Station turnOff={this.onturnOffHandler} />
        {this.state.radios ? (
          this.state.radios.map((radio, index) => (
            <Fragment>
              <Channel
                id={index}
                radio={radio}
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
