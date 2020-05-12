import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: "",
      name: "",
    };
  }

  updatePicture(value) {
    this.setState({
      picture: value,
    });
  }

  updateName(value) {
    this.setState({
      name: value,
    });
  }

  addFriend() {
    const { name, picture, friends } = this.state;
    const newFriend = { name, picture };
    this.setState({
      friends: [...friends, newFriend],
      picture: "",
      name: "",
    });
  }

  render() {
    // console.log(this.state)
    const friends = this.state.friends.map((friend, index) => {
      return (
        <div key={`friend-index-${index}`}>
          <img src={friend.picture} alt={friend.name} width='200px' />
          <span>{friend.name}</span>
        </div>
      );
    });
    return (
      <div className='App'>
        <span>Picture URL: </span>
        <input
          placeholder='Add URL here...'
          onChange={e => this.updatePicture(e.target.value)}
          value={this.state.picture}
        />
        <span>Friend name: </span>
        <input
          placeholder='Add name...'
          onChange={e => this.updateName(e.target.value)}
          value={this.state.name}
        />
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
