import React, { Component } from "react";
import brspdlogo from "../images/Branding/01 Logo/Logo/Full Color/Digital/Brightspeed_Logo_Full_Color_RGB_864px@72ppi.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <img src={brspdlogo} alt="logo" width="50%" className="logo-header" />
      </div>
    );
  }
}
