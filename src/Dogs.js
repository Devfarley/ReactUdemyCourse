import React, { Component } from 'react';
import Dog from './Person/Dog';

export default class Dogs extends Component {
  state = {
    dogs: [
      { name: 'Brutus', breed: 'Huskey' },
      { name: 'Kora', breed: 'Mini Aussie Shephard' },
      { name: 'Blue', breed: 'Blue Heeler' },
    ],
  };

  nameChange = (event) => {
    this.setState({
      dogs: [
        { name: event.target.value, breed: 'Huskey' },
        { name: 'Kora', breed: 'Mini Aussie Shephard' },
        { name: 'Blue', breed: 'Blue Heeler' },
      ],
    });
  };

  render() {
    return (
      <div>
        <h1>The dogs of my life!</h1>
        <Dog
          name={this.state.dogs[0].name}
          breed={this.state.dogs[0].breed}
          changed={this.nameChange}
        />
        <Dog name={this.state.dogs[1].name} breed={this.state.dogs[1].breed} />
        <Dog name={this.state.dogs[2].name} breed={this.state.dogs[2].breed} />
      </div>
    );
  }
}
