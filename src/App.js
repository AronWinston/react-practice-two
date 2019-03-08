import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
    usernames: [
      {username: "Aron", hobby: "Snowboarding"},
      {username: "Mitch", hobby: "Fishing"},
      {username: "Abdhul", hobby: "Surfing"}
    ]
  }

  userNameChange = (event) => {
    this.setState({usernames: [
      {username: event.target.value, hobby: "Snowboarding"},
      {username: "Mitchell", hobby: "Fishing"},
      {username: event.target.value, hobby: "Surfing"}
    ]})
  }

  userHobbyChanger = (e) => {
    this.setState({usernames: [
      {username: "Aron", hobby: "Snowboarding"},
      {username: "Mitch", hobby: e.target.value},
      {username: "Abdhul", hobby: "Surfing"}
    ]})
  }

  render() {
    return (
      <div className="App">
        <UserInput 
        changed={this.userNameChange}
        currentName={this.state.usernames[2].username}
        hobbychanged={this.userHobbyChanger}
        currentHobby={this.state.usernames[1].hobby} />
        <UserOutput 
        username={this.state.usernames[0].username}
        hobby={this.state.usernames[0].hobby} />
        <UserOutput username={this.state.usernames[1].username}
        hobby={this.state.usernames[1].hobby} />
        <UserOutput username={this.state.usernames[2].username}
        hobby={this.state.usernames[2].hobby} />
      </div>
    );
  }
}

export default App;
