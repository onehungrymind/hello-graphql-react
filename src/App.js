import React, { Component } from 'react';

import { request } from 'graphql-request'

const BASE_URL = 'http://localhost:3100/graphql';

const query = `query allStudents {
    allStudents {
      id
      firstName
      lastName
      active
    }
  }`;

class App extends Component {
  componentWillMount() {
    request(BASE_URL, query).then(data => this.setState({data}));
  }

  render() {
    if (!this.state) return 'Loading...';

    return (
      <div className="App">
        <h1>Students</h1>
        <div style={{textAlign: 'left'}}>
          <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default App;
