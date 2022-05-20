import React from "react";
import Grid from "@mui/material/Grid";

const WholeSale = () => {
  return (
    <React.Fragment>
      <h1 className="voip-product">VOIP Products</h1>
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
                    Securely link data centers, clouds, offices, VPNs and
                     LANs with dedicated  connections
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
                    Securely link data centers, clouds, offices, VPNs and
                     LANs with dedicated  connections
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
                    Securely link data centers, clouds, offices, VPNs and
                     LANs with dedicated  connections
                    </h3>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default WholeSale;
