import React, { Component } from "react";
import "./App.css";
import Input from "./components/input/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input.view />
      </div>
    );
  }
}

export default App;
