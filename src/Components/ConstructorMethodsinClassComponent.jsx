import React, { Component } from "react";

// when you come across an older code base
// in javascript classes before class fields was really a part of the language you have to initialize
// any value you class wants to contain inside of a method called constructor
// it is important for you to note that this meathod is not part of react lifecycle method
// it is something that is part of the javascript language
// as the name indicate is a chance to construct the object that will be created when you create
// an instance of this class

export default class ConstructorMethodsinClassComponent extends Component {
    // if you do need to use this.props pass it in both the constructor and super 
  constructor(props) {
    super(props);
    this.state = {
      goOut: "Yes",
    };
    this.toggleGoOut = this.toggleGoOut.bind(this);
  }

  //   this is a function declaration
  toggleGoOut() {
    this.setState((prevState) => {
      return { goOut: prevState.goOut === "Yes" ? "No" : "Yes" };
    });
  }

  render() {
    return (
      <div
        style={{
          background: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "white",
        }}
      >
        <div>
          <h1>Should I go out</h1>
          <div
            style={{
              padding: "10px",
              background: "white",
              borderRadius: "500px",
              fontSize: "20px",
              textAlign: "center",
              color: "black",
              cursor: "pointer",
            }}
            onClick={() => this.toggleGoOut()}
          >
            <h1>{this.state.goOut}</h1>
          </div>
        </div>
      </div>
    );
  }
}
