import React, { Component } from "react";

import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <div className="app_container">
          <div className="left_section">
            <SmurfList />
          </div>
          <div className="right_section">
            <SmurfForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
