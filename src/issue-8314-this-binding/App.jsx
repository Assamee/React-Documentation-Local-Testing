import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // We use an arrow function here just so the button click works normally
  // Because arrow functions inherit their own `this` property
  handleClick = () => {
    this.setState(
      { count: this.state.count + 1 },
      
      // We use a standard 'function' keyword for the callback.
      // Under normal JavaScript rules, 'this' should become 'undefined' here.
      function() {
        console.log("State updated! The callback 'this' is:", this);
      }
    );
  };

  render() {
    return (
      <div style={{ padding: '50px' }}>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleClick}>Test setState Callback</button>
      </div>
    );
  }
}