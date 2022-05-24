import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import brspdlogo from "../images/Branding/01 Logo/Logo/Full Color/Digital/Brightspeed_Logo_Full_Color_RGB_864px@72ppi.png";
import twitter from "../images/Branding/logos_2/twitter_1.png";
import fb from "../images/Branding/logos_2/fb.png";
import linkedIn from "../images/Branding/logos_2/linkedIn.png";
import { Link } from "react-router-dom";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


const Home = () => {
  return (
    <React.Fragment>
      <div className="home">
        <div class="image-header">
          Taking care of <br /> business where <br /> you live
          </div>
          <button className="button-contactus">Contact Us</button>

        <div className="img-home"></div>
        <p className="content-1">
          At Brightspeed, we're invested in bringing fast, reliable products and
          services to your communities, because they're our communities, too.
          Our mission is to deliver the speed you need to stay competitive, so
          you can meet the evolving demands of modern day business.
          <br /> <br />
          And because we live where you live, we can offer speed of service,
          response and repair that other providers can't.
        </p>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 className="network-sol">Networking solutions</h1>
          </Grid>
          <Grid item xs={4} className="ethernet">
            <p className="border-yellow"></p>
            <h3 className="sub-elem">Ethernet</h3>
            <p className="border-black-Ethernet"></p>
            <p className="margin-and-size-p">
              Securely link data centers, <br /> cluds, offices, VPNs and <br />{" "}
              LANs with dedicated <br /> connections
            </p>
          </Grid>
          <Grid item xs={4}>
            <p className="border-yellow"></p>
            <h3 className="sub-elem">Internet</h3>
            <p className="border-black-internet"></p>

            <p className="margin-and-size-p">
              Reliably deliver applications <br /> and data using our high <br /> performing and secure <br /> network
            </p>
          </Grid>
          <Grid item xs={4}>
            <p className="border-yellow"></p>
            <h3 className="sub-elem">Broadband</h3>
            <p className="border-black-broadband"></p>

            <p className="margin-and-size-p">
              Faster data transmission over <br /> copper, bonded copper or <br />fiber technologies
            </p>
          </Grid>

          <Grid item xs={4}>
            <p className="border-yellow"></p>
            <h3 className="sub-elem">Dark Fiber</h3>
            <p className="border-black-fiber"></p>

            <p className="margin-and-size-p">
             Deliver quick payback while<br /> keeping costs under control <br /> with dedicated bandwidth
            </p>
          </Grid>
          <Grid item xs={4}>
            <p className="border-yellow"></p>
            <h3 className="sub-elem">Private Line</h3>
            <p className="border-black-line"></p>

            <p className="margin-and-size-p">
              Reliable, secure and <br />dedicated point-to-point<br /> connectivity for voice and<br /> data traffic
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 className="voice-sol">Voice solutions</h1>
          </Grid>
          <Grid item xs={4} className="ethernet">
            <p className="border-orange"></p>
            <h3 className="sub-elem">Local Voice Services</h3>
            <p className="border-black-local"></p>
            <p className="margin-and-size-p">
              Traditional phone and <br /> trunking services
            </p>
          </Grid>
          <Grid item xs={4}>
            <p className="border-orange"></p>
            <Link to="/ew/wholesale/voice" className="route-text-dec-none"><h3 className="sub-elem">Wholesale Voice</h3></Link>
            <p className="border-black-long"></p>

            <p className="margin-and-size-p">
              Cost-effective, scalable phone <br /> services and routing
            </p>
          </Grid>
          <Grid item xs={4}>
            <p className="border-orange"></p>
            <Link to="/ew/enterprise/voice" className="route-text-dec-none"><h3 className="sub-elem">Enterprise Voice</h3></Link>
            
            <p className="border-black-international"></p>

            <p className="margin-and-size-p">
              Reliable,high-performance <br /> international connections, <br /> completions and voice quality
            </p>
          </Grid>

          <Grid item xs={4}>
            <p className="border-orange"></p>
            <h3 className="sub-elem">e911</h3>
            <p className="border-black-e911"></p>

            <p className="margin-and-size-p">
              Route end-users calls to an <br /> emergency service bureau or <br />the Public Safety Answering <br /> Point (PSAP)
            </p>
          </Grid>
          <Grid item xs={4}>
            <p className="border-orange"></p>
            <h3 className="sub-elem">Direct Inward Dial PBX Trunks</h3>
            <p className="border-black-direct"></p>

            <p className="margin-and-size-p">
              Give customers the ability to <br />directly dial a specific <br /> extension on your PBX system
            </p>
          </Grid>
          <Grid item xs={4}>
            <p className="border-orange"></p>
            <h3 className="sub-elem">Line Volume plan</h3>
            <p className="border-black-line_voulume"></p>

            <p className="margin-and-size-p">
              Lock in a competitive and <br /> consistent rate for local <br /> calling services
            </p>
          </Grid>
        </Grid>

        <div className="choose-brightspeed">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1 className="why-h1">Why choose Brightspeed?</h1>
            </Grid>
            <Grid item xs={6} >
              <p className="why-p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                popularised in the 1960s with the release of Letraset sheets
              </p>
            </Grid>
            <Grid item xs={6} className="brightspeed-sub-right">
              <h5 className="brightspeed-sub">Local, not small</h5>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </p>
              <h5 className="brightspeed-sub">Comitted, not complicated</h5>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </p>
            </Grid>
          </Grid>
        </div>

        <Grid container spacing={2} className="about-brightspeed">
          <Grid item xs={3}>
            <ul className="list-customers">
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
                <li  className="header-list">About Brightspeed</li>
              </strong>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Contact Us</li>
              <li>Wholesale</li>
              <li>Partner Program</li>
            </ul>
          </Grid>
          <Grid item xs={6}>
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
            <p className="font-size-copyright"> <strong>Legal Notices |</strong> <strong>Privacy Policy |</strong> <strong>Cookie Settings</strong> </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Home;
