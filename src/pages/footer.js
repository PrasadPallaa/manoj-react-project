import twitter from "../../src/images/Branding/logos_2/twitter_1.png";
import fb from "../../src/images/Branding/logos_2/fb.png";
import linkedIn from "../../src/images/Branding/logos_2/linkedIn.png";
import Grid from "@mui/material/Grid";
import brspdlogo from "../../src/images/Branding/01 Logo/Logo/Full Color/Digital/Brightspeed_Logo_Full_Color_RGB_864px@72ppi.png";

const Footer = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        className="about-brightspeed login-about-brightspeed"
      >
        <Grid item xs={12} sm={6} lg={4}>
          <ul className="list-customers">
            <strong>
              <li className="header-list">For Customers</li>
            </strong>
            <li>Customers With Disablities</li>
            <li>Support</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ul className="list-customers-carrers">
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
        <Grid item xs={12} sm={6} lg={4}>
          <div className="brightspeed-footer-content">
            <div className="social-icons">
              <img
                src={brspdlogo}
                alt="logo"
                width="70%"
                className="img-brightspeed"
              />
              <h5 className="follow-us">FOLLOW US</h5>
              <img alt="twitter" src={twitter} className="logo-social" />
              <img alt="fb" src={fb} className="logo-social" />
              <img alt="linkedIn" src={linkedIn} className="logo-social" />
            </div>

            <div className="rights-content">
              <p className="font-size-copyright">
                <span>&#169;</span> 2022 Brightspeed. All rights reserved.
              </p>
              <p className="font-size-copyright-data">
                {" "}
                <strong>Legal Notices |</strong>{" "}
                <strong>Privacy Policy |</strong>{" "}
                <strong>Cookie Settings</strong>{" "}
              </p>

              <ul className="font-size-copyright-notices">
                <li>Legal Notices</li>
                <li>Privacy Policy</li>
                <li>Cookie Settings</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
