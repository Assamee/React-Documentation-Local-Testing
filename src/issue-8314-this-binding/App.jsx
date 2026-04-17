import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState(
      { count: this.state.count + 1 },
      
      // Standard 'function' keyword used to test context binding.
      function() {
        console.log("State updated! The callback 'this' is:", this);
      }
    );
  };

  render() {
    return (
      <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
        <h2>Testing Issue #8314</h2>
        <p>
          Open the browser console and click the button. If the `this` context 
          is preserved in the callback, it confirms React handles internal 
          binding, making manual arrow functions redundant here.
        </p>
        
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>Count: {this.state.count}</h3>
          <button onClick={this.handleClick}>Test setState Callback</button>
        </div>
      </div>
    );
  }
}