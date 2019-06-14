import React, { Component } from "react";
import BackgroundImg0 from "../images/backgroundImg0.jpg";

class LandingPage extends Component {
  // state = {
  //   backgroundImage: ""
  // };
  // componentWillMount() {
  //   const ramdonNumber = Math.floor(Math.random() * 4);
  //   const backgroundImage = `"../images/backgroundImg${ramdonNumber}.jpg"`;
  //   this.setState({ backgroundImage });
  //   console.log(backgroundImage);
  // }

  render() {
    // let { backgroundImage } = this.state;
    return (
      <React.Fragment>
        <body background={BackgroundImg0}>
          <h1>Landing Page</h1>
        </body>
      </React.Fragment>
    );
  }
}

export default LandingPage;
