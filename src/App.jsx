import React from "react";
import moment from "moment";
import ChirpCard from "./components/ChirpCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      msg: "",
      timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
      chirps: [
        {
          username: "Scott Dorque",
          msg: "baseaball",
          timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
        },
        {
          username: "Archibeld Trent",
          msg: "Du",
          timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
        },
        {
          username: "Taargus Taargus",
          msg: "I want to changhe my name to something else",
          timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
        },
      ],
    };
  }
  handleSubmit = () => {
    let newChirp = {
      username: this.state.username,
      msg: this.state.msg,
      timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
    };
    this.setState({ chirps: [...this.state.chirps, newChirp] });
  };

  render() {
    return (
      <>
        <div id="container">
          <h1>Chirperp</h1>
          <img
          id="smiley"
            src="https://www.clipartqueen.com/image-files/flower-smiley-big.png"
            alt=""
          />
          <input
            type="text"
            placeholder="Who do you think you are."
            onChange={(e) =>
              this.setState({ username: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="What."
            onChange={(e) => this.setState({ msg: e.target.value })}
          />
          <button onClick={this.handleSubmit}>Post chirp</button>
        </div>
        {this.state.chirps.map((chirp) => (
          <ChirpCard chirp={chirp} />
        ))}
      </>
    );
  }
}

export default App;
