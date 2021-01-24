import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: '24' },
      { name: 'Bob', age: '28' },
      { name: 'Dax', age: '27' },
    ],
  };

  switchNameHandler = () => {
    // console.log('Was Clicked');
    this.setState({
      persons: [
        { name: 'Maximus', age: '97' },
        { name: 'Bobulos', age: '87' },
        { name: 'Daximan', age: '89' },
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi, I am a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person>blah blah</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
