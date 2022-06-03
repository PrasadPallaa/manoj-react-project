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
import DownArrow from "../../images/Branding/logos_2/980c46c6-cb9f-47d8-b27b-f3401c5fb813.png";
import brightSpeedImage from "../../images/Branding/Image Library/Brightspeed Image Library_Commercial_Retouched/RF_GettyImages-1359098766/RF_GettyImages-1359098766_Purchased 2.11.png"

const WholeSale = () => {
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [brightspeedlist1, setbrightspeedlist1] = React.useState(false);
  const [brightspeedlist2, setbrightspeedlist2] = React.useState(false);
  const [brightspeedlist3, setbrightspeedlist3] = React.useState(false);
  const [brightspeedlist4, setbrightspeedlist4] = React.useState(false);
  const [brightspeedlist5, setbrightspeedlist5] = React.useState(false);
  const [brightspeedlist6, setbrightspeedlist6] = React.useState(false);

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

  const handleClickBrightspeedList1 = () => {
    setbrightspeedlist1(!brightspeedlist1);
    setbrightspeedlist2(false);
    setbrightspeedlist3(false);
    setbrightspeedlist4(false);
    setbrightspeedlist5(false);
    setbrightspeedlist6(false);
  };

  const handleClickBrightspeedList2 = () => {
    setbrightspeedlist1(false);
    setbrightspeedlist2(!brightspeedlist2);
    setbrightspeedlist3(false);
    setbrightspeedlist4(false);
    setbrightspeedlist5(false);
    setbrightspeedlist6(false);
  };

  const handleClickBrightspeedList3 = () => {
    setbrightspeedlist1(false);
    setbrightspeedlist2(false);
    setbrightspeedlist3(!brightspeedlist3);
    setbrightspeedlist4(false);
    setbrightspeedlist5(false);
    setbrightspeedlist6(false);
  };

  const handleClickBrightspeedList4 = () => {
    setbrightspeedlist1(false);
    setbrightspeedlist2(false);
    setbrightspeedlist3(false);
    setbrightspeedlist4(!brightspeedlist4);
    setbrightspeedlist5(false);
    setbrightspeedlist6(false);
  };

  const handleClickBrightspeedList5 = () => {
    setbrightspeedlist1(false);
    setbrightspeedlist2(false);
    setbrightspeedlist3(false);
    setbrightspeedlist4(false);
    setbrightspeedlist5(!brightspeedlist5);
    setbrightspeedlist6(false);
  };

  const handleClickBrightspeedList6 = () => {
    setbrightspeedlist1(false);
    setbrightspeedlist2(false);
    setbrightspeedlist3(false);
    setbrightspeedlist4(false);
    setbrightspeedlist5(false);
    setbrightspeedlist6(!brightspeedlist6);
  };

  return (
    <React.Fragment>
      <NavbarBottom />
      <h1 id="voice-and-voip" className="voip-product">VoIP Products</h1>
      <p className="voip-services">
        Find services that fit your business needs
      </p>
      <div className="wholesale">
        <List
          sx={{ width: "100%", maxWidth: 360 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton
            onClick={handleClick1}
            className={open1 ? "bcc-selected" : ""}
          >
            {/* <ListItemIcon>{open1 ? <SendIcon /> : ""}</ListItemIcon> */}
            <ListItemText primary={open1 ? <strong>Business Cloud Computing</strong> : "Business Cloud Computing"} />
          </ListItemButton>
          <ListItemButton
            onClick={handleClick2}
            className={open2 ? "bcc-selected" : ""}
          >
            {/* <ListItemIcon>{open2 ? <SendIcon /> : ""}</ListItemIcon> */}
            <ListItemText
              primary={open2 ? <strong>SIP Trunk</strong> : "SIP Trunk"}
            />
          </ListItemButton>
          <ListItemButton
            onClick={handleClick3}
            className={open3 ? "bcc-selected" : ""}
          >
            {/* <ListItemIcon>{open3 ? <SendIcon /> : ""}</ListItemIcon> */}
            <ListItemText
              primary={
                open3 ? <strong>Business Lines</strong> : "Business Lines"
              }
            />
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
                Give customers the SIP Trunk calling flexibility and features
                they need.
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
                Give customers the Business Lines calling flexibility and
                features they need.
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

      <Grid container spacing={2} className="brightspeed-list-items">
        <Grid item xs={12} sm={6} lg={5}>
          {/* <h1 className="want-to-know-more-heading">Want to know more?</h1>
          <p className="want-to-know-more-content">
            Learn more about Brightspeed with the help of these questions and
            answers.
          </p> */}
          <img alt="bright-speed-list" src={brightSpeedImage} className="bright-speed-image-list" />
        </Grid>
        <Grid item xs={12} sm={6} lg={7}>
          <ul className="brightspeed-list-style">
            <li
              className="brightspeed-list-style-li"
              onClick={handleClickBrightspeedList1}
            >
              Who is Brightspeed?{" "}
              <span>
                <img
                  alt="down-arrow"
                  src={DownArrow}
                  className="down-arrow-align"
                />
              </span>
            </li>

            {brightspeedlist1 ? (
              <p className="brightspeed-list-li-content">
                Who is Brightspeed? Our company exists because we believe that
                all people and businesses should have access to the connectivity
                they need to accomplish what is most important to them. Our
                goal, over the next several years, is to build a next-gen fiber
                optics–based network to power Internet access for the
                communities we will be privileged to serve. Brightspeed was
                formed by the agreement reached in August 2021 between Connect
                Holding LLC and Lumen Technologies, Inc. for Apollo Global
                Management, Inc. to acquire certain telecom assets and
                operations from Lumen. Our network will serve more than 6
                million homes and businesses in 20 states, primarily in the
                Midwest and Southeast portions of the U.S. What truly excites us
                is the chance to bring the best technology to communities,
                particularly in rural and suburban America, who have not always
                had the choices in Internet providers that they need and
                deserve. We hope you will come to know us as the kind of people
                who wake up every morning thinking about better ways to provide
                the best, most reliable service to consumers and businesses, big
                and small. We’re committed to building a smart network for
                customers who want consistently fast Internet, at a great value,
                delivered through a customer experience that makes staying
                connected simple and easy. We understand that Internet access
                powers life. We’re about keeping you connected, so you can work,
                learn, play, and accomplish what matters most.
              </p>
            ) : (
              ""
            )}
            <li
              className="brightspeed-list-style-li"
              onClick={handleClickBrightspeedList2}
            >
              Why is Brightspeed importtant to me?{" "}
              <span>
                <img
                  alt="down-arrow"
                  src={DownArrow}
                  className="down-arrow-align"
                />
              </span>
            </li>
            {brightspeedlist2 ? (
              <p className="brightspeed-list-li-content">
                Who is Brightspeed? Our company exists because we believe that
                all people and businesses should have access to the connectivity
                they need to accomplish what is most important to them. Our
                goal, over the next several years, is to build a next-gen fiber
                optics–based network to power Internet access for the
                communities we will be privileged to serve. Brightspeed was
                formed by the agreement reached in August 2021 between Connect
                Holding LLC and Lumen Technologies, Inc. for Apollo Global
                Management, Inc. to acquire certain telecom assets and
                operations from Lumen. Our network will serve more than 6
                million homes and businesses in 20 states, primarily in the
                Midwest and Southeast portions of the U.S. What truly excites us
                is the chance to bring the best technology to communities,
                particularly in rural and suburban America, who have not always
                had the choices in Internet providers that they need and
                deserve. We hope you will come to know us as the kind of people
                who wake up every morning thinking about better ways to provide
                the best, most reliable service to consumers and businesses, big
                and small. We’re committed to building a smart network for
                customers who want consistently fast Internet, at a great value,
                delivered through a customer experience that makes staying
                connected simple and easy. We understand that Internet access
                powers life. We’re about keeping you connected, so you can work,
                learn, play, and accomplish what matters most.
              </p>
            ) : (
              ""
            )}
            <li
              className="brightspeed-list-style-li"
              onClick={handleClickBrightspeedList3}
            >
              Why is fiber optics so much better?{" "}
              <span>
                <img
                  alt="down-arrow"
                  src={DownArrow}
                  className="down-arrow-align"
                />
              </span>
            </li>
            {brightspeedlist3 ? (
              <p className="brightspeed-list-li-content">
                Who is Brightspeed? Our company exists because we believe that
                all people and businesses should have access to the connectivity
                they need to accomplish what is most important to them. Our
                goal, over the next several years, is to build a next-gen fiber
                optics–based network to power Internet access for the
                communities we will be privileged to serve. Brightspeed was
                formed by the agreement reached in August 2021 between Connect
                Holding LLC and Lumen Technologies, Inc. for Apollo Global
                Management, Inc. to acquire certain telecom assets and
                operations from Lumen. Our network will serve more than 6
                million homes and businesses in 20 states, primarily in the
                Midwest and Southeast portions of the U.S. What truly excites us
                is the chance to bring the best technology to communities,
                particularly in rural and suburban America, who have not always
                had the choices in Internet providers that they need and
                deserve. We hope you will come to know us as the kind of people
                who wake up every morning thinking about better ways to provide
                the best, most reliable service to consumers and businesses, big
                and small. We’re committed to building a smart network for
                customers who want consistently fast Internet, at a great value,
                delivered through a customer experience that makes staying
                connected simple and easy. We understand that Internet access
                powers life. We’re about keeping you connected, so you can work,
                learn, play, and accomplish what matters most.
              </p>
            ) : (
              ""
            )}
            <li
              className="brightspeed-list-style-li"
              onClick={handleClickBrightspeedList4}
            >
              When can i sign up for Brightspeed Internet?{" "}
              <span>
                <img
                  alt="down-arrow"
                  src={DownArrow}
                  className="down-arrow-align"
                />
              </span>
            </li>
            {brightspeedlist4 ? (
              <p className="brightspeed-list-li-content">
                Who is Brightspeed? Our company exists because we believe that
                all people and businesses should have access to the connectivity
                they need to accomplish what is most important to them. Our
                goal, over the next several years, is to build a next-gen fiber
                optics–based network to power Internet access for the
                communities we will be privileged to serve. Brightspeed was
                formed by the agreement reached in August 2021 between Connect
                Holding LLC and Lumen Technologies, Inc. for Apollo Global
                Management, Inc. to acquire certain telecom assets and
                operations from Lumen. Our network will serve more than 6
                million homes and businesses in 20 states, primarily in the
                Midwest and Southeast portions of the U.S. What truly excites us
                is the chance to bring the best technology to communities,
                particularly in rural and suburban America, who have not always
                had the choices in Internet providers that they need and
                deserve. We hope you will come to know us as the kind of people
                who wake up every morning thinking about better ways to provide
                the best, most reliable service to consumers and businesses, big
                and small. We’re committed to building a smart network for
                customers who want consistently fast Internet, at a great value,
                delivered through a customer experience that makes staying
                connected simple and easy. We understand that Internet access
                powers life. We’re about keeping you connected, so you can work,
                learn, play, and accomplish what matters most.
              </p>
            ) : (
              ""
            )}
            <li
              className="brightspeed-list-style-li"
              onClick={handleClickBrightspeedList5}
            >
              How can i learn about job opportunities with Brightspeed?{" "}
              <span>
                <img
                  alt="down-arrow"
                  src={DownArrow}
                  className="down-arrow-align"
                />
              </span>
            </li>
            {brightspeedlist5 ? (
              <p className="brightspeed-list-li-content">
                Who is Brightspeed? Our company exists because we believe that
                all people and businesses should have access to the connectivity
                they need to accomplish what is most important to them. Our
                goal, over the next several years, is to build a next-gen fiber
                optics–based network to power Internet access for the
                communities we will be privileged to serve. Brightspeed was
                formed by the agreement reached in August 2021 between Connect
                Holding LLC and Lumen Technologies, Inc. for Apollo Global
                Management, Inc. to acquire certain telecom assets and
                operations from Lumen. Our network will serve more than 6
                million homes and businesses in 20 states, primarily in the
                Midwest and Southeast portions of the U.S. What truly excites us
                is the chance to bring the best technology to communities,
                particularly in rural and suburban America, who have not always
                had the choices in Internet providers that they need and
                deserve. We hope you will come to know us as the kind of people
                who wake up every morning thinking about better ways to provide
                the best, most reliable service to consumers and businesses, big
                and small. We’re committed to building a smart network for
                customers who want consistently fast Internet, at a great value,
                delivered through a customer experience that makes staying
                connected simple and easy. We understand that Internet access
                powers life. We’re about keeping you connected, so you can work,
                learn, play, and accomplish what matters most.
              </p>
            ) : (
              ""
            )}
            <li
              className="brightspeed-list-style-li"
              onClick={handleClickBrightspeedList6}
            >
              Where is Brightspeed's headquarters?{" "}
              <span>
                <img
                  alt="down-arrow"
                  src={DownArrow}
                  className="down-arrow-align"
                />
              </span>
            </li>
            {brightspeedlist6 ? (
              <p className="brightspeed-list-li-content">
                Who is Brightspeed? Our company exists because we believe that
                all people and businesses should have access to the connectivity
                they need to accomplish what is most important to them. Our
                goal, over the next several years, is to build a next-gen fiber
                optics–based network to power Internet access for the
                communities we will be privileged to serve. Brightspeed was
                formed by the agreement reached in August 2021 between Connect
                Holding LLC and Lumen Technologies, Inc. for Apollo Global
                Management, Inc. to acquire certain telecom assets and
                operations from Lumen. Our network will serve more than 6
                million homes and businesses in 20 states, primarily in the
                Midwest and Southeast portions of the U.S. What truly excites us
                is the chance to bring the best technology to communities,
                particularly in rural and suburban America, who have not always
                had the choices in Internet providers that they need and
                deserve. We hope you will come to know us as the kind of people
                who wake up every morning thinking about better ways to provide
                the best, most reliable service to consumers and businesses, big
                and small. We’re committed to building a smart network for
                customers who want consistently fast Internet, at a great value,
                delivered through a customer experience that makes staying
                connected simple and easy. We understand that Internet access
                powers life. We’re about keeping you connected, so you can work,
                learn, play, and accomplish what matters most.
              </p>
            ) : (
              ""
            )}
          </ul>
        </Grid>
      </Grid>

      <hr className="horizontal-line" />

      <Grid container spacing={2} className="about-brightspeed">
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
            <div  className="brightspeed-footer-content">
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
    </React.Fragment>
  );
};

export default WholeSale;
