import React, { Component } from "react";

export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Voltron'
        }
    }


  render() {
    return (
      <header>
        <span>This is {this.props.favPokemon}'s header</span>
      </header>
    );
  }
}

// export default Header; //Export from bottom