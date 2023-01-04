import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  constructor() {
    super();
    console.log("constructor is called");

    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }
  increment = () => {
    //console.log(this.state.count);
    //******* Never Update the state Directly, So to udate state we use setState()*******
    //this.state.count = this.state.count + 1;
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log("componnet did mount called");
  }

  componentDidUpdate() {
    console.log("componnet did update called");
  }
  componentWillUnmount() {
    console.log("component will unmount called");
  }
  render() {
    console.log("render is called");
    return (
      <div className="counter">
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
