import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FriendsList from "./components/friendsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { friends: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { friends } = this.state;
    return (
      <div className="app">
        <h1>Friends</h1>
        <FriendsList friends={friends} />;
      </div>
    );
  }
}

export default App;
