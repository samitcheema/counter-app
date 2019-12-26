import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount}</span>
        <button>increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state.count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

/* JSX expression which renders h1 tag, hello world.
 */
