import React, { Component } from "react";

export default class StateInClassComponent extends Component {
  // using class field in when calling state in a class component which declears state as an object

  state = {
    goOut: "Yes",
  };

  //   this is a function declaration
  //   toggleGoOut () {
  //     this.setState(prevState => {
  //        return prevState === "Yes" ? "No" : "Yes"
  //     }
  //     )
  //   }

  //   this is an arrow funtion or class methods
  // note any class method that you create inside of your component that needs to use the thi.setState method in
  // other to change state  any time you want to declare a function that uses this.setState for now at least use arrow
  // function but you don't necessary need to use arrow function in every method unless it's setState Method.

  toggleGoOut = () => {
    // this.setState((prevState) => {
    //   return { goOut: prevState.goOut === "Yes" ? "No" : "Yes" };
    // });
    // or
    this.setState((prevState) => ({
      goOut: prevState.goOut === "Yes" ? "No" : "Yes",
    }));
  };

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
