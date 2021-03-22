import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

export class Users extends Component {
  state = {
    username: 'superjosh',
  };

  usernameHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div>
        <UserInput
          changed={this.usernameHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName='Josh' />
      </div>
    );
  }
}

export default Users;
