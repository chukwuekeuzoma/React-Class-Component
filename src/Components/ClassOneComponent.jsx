import React, { Component } from "react";

//this is a funtion component that will be converted to class component

// function ClassOneComponent(props) {
//     return (
//         <div>
//            This is the Funtion component
//         </div>
//     );
// }

// export default ClassOneComponent;

export default class ClassOneComponent extends Component {
  render() {
    return (
      <div
        style={{
          background: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          height: "100vh",
          color: "white",
        }}
      >
        <div>
           <Header username="martins"/>
           <Greeting/>
        </div>
      </div>
    );
  }
}

class Header extends Component {
    render() {
        return (
             <header>
               <p>welcome, {this.props.username}! </p>
            </header>
        )
    }
}

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afternoon"
    } else {
      timeOfDay = "night"
    }

    return (<>
       <div
         style={{ color: "white",
         fontSize: "50px",
        }}
       
       >Good {timeOfDay} to you, sir or Madam!</div>
    </>);
  }
}
