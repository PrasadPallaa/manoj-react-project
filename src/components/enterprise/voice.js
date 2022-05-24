import React from "react";
import Grid from "@mui/material/Grid";
import NavbarBottom from "../bottom-navbar";
import RequestInfo from "../enterprise/requestInfo";
import twitter from "../../images/Branding/logos_2/twitter_1.png";
import fb from "../../images/Branding/logos_2/fb.png";
import linkedIn from "../../images/Branding/logos_2/linkedIn.png";
import brspdlogo from "../../images/Branding/01 Logo/Logo/Full Color/Digital/Brightspeed_Logo_Full_Color_RGB_864px@72ppi.png";

const Voice = () => {
  return (
    <React.Fragment>
      <NavbarBottom />
      <h1 className="voip-product">VOIP Products</h1>
      <p className="voip-services">
        Find services that fit your business needs
      </p>
      <div className="wholesale">
        <Grid container spacing={2} className="flex-items">
          <Grid item xs={4}>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h3 className="list-item-title">BCC</h3>
                </div>
                <div class="flip-card-back">
                  <h3 className="list-item-backside">
                    Securely link data centers, clouds, offices, VPNs and LANs
                    with dedicated connections
                  </h3>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h3 className="list-item-title">SIP Trunk</h3>
                </div>
                <div class="flip-card-back">
                  <h3 className="list-item-backside">
                    Securely link data centers, clouds, offices, VPNs and LANs
                    with dedicated connections
                  </h3>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h3 className="list-item-title">Business Lines</h3>
                </div>
                <div class="flip-card-back">
                  <h3 className="list-item-backside">
                    Securely link data centers, clouds, offices, VPNs and LANs
                    with dedicated connections
                  </h3>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="speakToSales">
        <h2 className="speakToSales-title">Talk to sales Agent</h2>
        <h5 className="speakToSales-contact">+19159969739</h5>
      </div>

      <div id="request-info">
        <RequestInfo />
      </div>

      <div className="footer-data">
        <Grid container spacing={2} className="about-brightspeed ">
          <Grid item xs={4}>
            <ul className="list-customers-1">
              <strong>
                <li className="header-list">For Customers</li>
              </strong>
              <li>Customers With Disablities</li>
              <li>Support</li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <ul className="list-customers">
              <strong>
                <li className="header-list">About Brightspeed</li>
              </strong>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Contact Us</li>
              <li>Wholesale</li>
              <li>Partner Program</li>
            </ul>
          </Grid>
          <Grid item xs={5}>
            <img
              src={brspdlogo}
              alt="logo"
              width="50%"
              className="img-brightspeed"
            />
            <h5 className="follow-us">FOLLOW US</h5>
            <img alt="twitter" src={twitter} className="logo-social" />
            <img alt="fb" src={fb} className="logo-social" />
            <img alt="linkedIn" src={linkedIn} className="logo-social" />
            <div className="rights-content">
              <p className="font-size-copyright">
                <span>&#169;</span> 2022 Brightspeed. All rights reserved.
              </p>
              <p className="font-size-copyright">
                {" "}
                <strong>Legal Notices |</strong>{" "}
                <strong>Privacy Policy |</strong>{" "}
                <strong>Cookie Settings</strong>{" "}
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Voice;
