import React from "react";
import Grid from "@mui/material/Grid";
import NavbarBottom from "../bottom-navbar";
import RequestInfo from "../enterprise/requestInfo";
import twitter from "../../images/Branding/logos_2/twitter_1.png";
import fb from "../../images/Branding/logos_2/fb.png";
import linkedIn from "../../images/Branding/logos_2/linkedIn.png";
import brspdlogo from "../../images/Branding/01 Logo/Logo/Full Color/Digital/Brightspeed_Logo_Full_Color_RGB_864px@72ppi.png";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";

const Voice = () => {
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(true);
    setOpen2(false);
    setOpen3(false);
  };
  const handleClick2 = () => {
    setOpen1(false);
    setOpen2(true);
    setOpen3(false);
  };
  const handleClick3 = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(true);
  };

  return (
    <React.Fragment>
      <NavbarBottom />
      <h1 className="voip-product">VOIP Products</h1>
      <p className="voip-services">
        Find services that fit your business needs
      </p>
      <div className="wholesale">
        <List
          sx={{ width: "100%", maxWidth: 360 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick1} className={open1 ? "bcc-selected" : ""}>
            <ListItemIcon>
            {open1 ? <SendIcon /> : "" }
            </ListItemIcon>
            <ListItemText  primary= {open1 ? <strong>BCC</strong> : "BCC"} />
          </ListItemButton>
          <ListItemButton onClick={handleClick2} className={open2 ? "bcc-selected" : ""}>
            <ListItemIcon>
               {open2 ? <SendIcon /> : "" }
            </ListItemIcon>
            <ListItemText primary={open2 ? <strong>SIP Trunk</strong> : "SIP Trunk"} />
          </ListItemButton>
          <ListItemButton onClick={handleClick3} className={open3 ? "bcc-selected" : ""}>
            <ListItemIcon>
            {open3 ? <SendIcon /> : "" }
            </ListItemIcon>
            <ListItemText primary={open3 ? <strong>Business Lines</strong> : "Business Lines"} />
          </ListItemButton>
        </List>

        <div className="content-collpase">
          {open1 ? (
            <div>
              <h1 className="content-collpase-header">BCC</h1>
              <h3 className="content-collpase-sub-header">
                Give customers the BCC calling flexibility and features they
                need.
              </h3>
              <p className="content-collpase-content">
                An intelligent network and comprehensive suite of inbound voice
                services can help your customers customize incoming toll-free
                call routing according to their specific business needs. Our
                advanced and enhanced call-routing features provide support with
                follow-the-sun routing capabilities. We offer excellent call
                performance and completion rates, multiple rating options, plus
                invoice and media delivery choices. With our global services,
                your customers can benefit from a virtual private network (VPN)
                and a reliable, feature-rich international voice toll-free
                service on a global network. Toll-free numbers, including
                Universal International Freephone Numbers, International Toll
                Free Numbers and Freephone, facilitate customers calling back to
                the United States from almost anywhere in the world and can be
                supported with our International Toll-Free Service.
              </p>
            </div>
          ) : open2 ? (
            <div>
              <h1 className="content-collpase-header">SIP Trunk</h1>
              <h3 className="content-collpase-sub-header">
                Give customers the SIP Trunk calling flexibility and features they
                need.
              </h3>
              <p className="content-collpase-content">
                An intelligent network and comprehensive suite of inbound voice
                services can help your customers customize incoming toll-free
                call routing according to their specific business needs. Our
                advanced and enhanced call-routing features provide support with
                follow-the-sun routing capabilities. We offer excellent call
                performance and completion rates, multiple rating options, plus
                invoice and media delivery choices. With our global services,
                your customers can benefit from a virtual private network (VPN)
                and a reliable, feature-rich international voice toll-free
                service on a global network. Toll-free numbers, including
                Universal International Freephone Numbers, International Toll
                Free Numbers and Freephone, facilitate customers calling back to
                the United States from almost anywhere in the world and can be
                supported with our International Toll-Free Service.
              </p>
            </div>
          ) : open3 ? (
            <div>
              <h1 className="content-collpase-header">Business Lines</h1>
              <h3 className="content-collpase-sub-header">
                Give customers the Business Lines calling flexibility and features they
                need.
              </h3>
              <p className="content-collpase-content">
                An intelligent network and comprehensive suite of inbound voice
                services can help your customers customize incoming toll-free
                call routing according to their specific business needs. Our
                advanced and enhanced call-routing features provide support with
                follow-the-sun routing capabilities. We offer excellent call
                performance and completion rates, multiple rating options, plus
                invoice and media delivery choices. With our global services,
                your customers can benefit from a virtual private network (VPN)
                and a reliable, feature-rich international voice toll-free
                service on a global network. Toll-free numbers, including
                Universal International Freephone Numbers, International Toll
                Free Numbers and Freephone, facilitate customers calling back to
                the United States from almost anywhere in the world and can be
                supported with our International Toll-Free Service.
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="speakToSales" id="sales-agent">
        <h2 className="speakToSales-title">Talk to sales Agent</h2>
        <h5 className="speakToSales-contact">+19159969739</h5>
      </div>

      <div id="request-info">
        <RequestInfo />
      </div>

      <hr className="horizontal-line" />

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
