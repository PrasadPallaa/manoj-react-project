import React from "react";
import Grid from "@mui/material/Grid";
import NavbarBottom from '../bottom-navbar';
import RequestInfo from "../enterprise/requestInfo";


const WholeSale = () => {
  return (
    <React.Fragment>
      <NavbarBottom />
      <div id="voip">
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
      </div>


      <div className="speakToSales">
        <h2 className="speakToSales-title">Speak to a Sales Rep</h2>
        <h5 className="speakToSales-contact">+19159969739</h5>
      </div>

      <div id="request-info">
      <RequestInfo />
      </div>
    </React.Fragment>
  );
};

export default WholeSale;
