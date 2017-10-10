import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Students' };
  }

  componentWillMount() {
  }

  render() {
    if (!this.state) return 'Loading...';

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div style={{textAlign: 'left'}}>
        </div>
      </div>
    );
  }
}

export default App;
