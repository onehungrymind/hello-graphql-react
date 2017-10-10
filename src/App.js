import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { request } from 'graphql-request'

const BASE_URL = 'http://localhost:3100/graphql';

const query = `query allStudents {
    allStudents {
      id
      firstName
      lastName
      active
      courses {
          id
          name
          description
          level
      }
    }
  }`;

request(BASE_URL, query).then(data => console.log('DATA', data));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
