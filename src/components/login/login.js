import Grid from "@mui/material/Grid";
import brspdlogo from "../../images/Branding/01 Logo/Logo/Full Color/Digital/Brightspeed_Logo_Full_Color_RGB_864px@72ppi.png";
import loginpageImage from "../../images/Branding/Image Library/Brightspeed Image Library_Commercial_Retouched/RF_GettyImages-1359098771/RF_GettyImages-1359098771_1.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import twitter from "../../images/Branding/logos_2/twitter_1.png";
import fb from "../../images/Branding/logos_2/fb.png";
import linkedIn from "../../images/Branding/logos_2/linkedIn.png";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Layout from '../../pages/Layout';
import Navbar from '../../components/navbar'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = React.useState();
  const navigate = useNavigate();

  const onSubmit = () => {
    if (email === "anjani.mittal@brightspeed.com" || password === "password") {
      navigate('/home/lead');
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }
  };
  return (
    <>
    <Navbar />
    <Layout />
      <Grid container spacing={2}>
      
        <Grid item xs={8}>
          {/* <img src={brspdlogo} alt="logo" className="img-brightspeed-login" /> */}
          <img
            src={loginpageImage}
            style={{ height: "90.7%", width: "99%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <div className="login-form">
            <Grid item>
              <TextField
                required
                style={{ width: "92%" }}
                label="Email"
                id="Email"
                placeholder="@brightspeed.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                inputProps={{
                  sx: {
                    "&::placeholder": {
                      float:"right"
                    }
                  }
                }}
                error={email === "" && isSubmit === false}
                helperText={
                  email === "" && isSubmit === false ? "Email is required!" : " "
                }
              />
            </Grid>
            <Grid item className="login-password">
              <TextField
                required
                style={{ width: "92%" }}
                label="Password"
                id="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                error={password === "" && isSubmit === false}
                helperText={
                  password === "" && isSubmit === false
                    ? "Password is required!"
                    : " "
                }
              />
            </Grid>
            <Grid item xs={11}>
              <label className="forget-password">
                <a className="forgt-pass-link">Forget Password</a>
              </label>
            </Grid>
            <Grid item className="login-button">
              <Button className="login-button-login" onClick={onSubmit}>
                Login
              </Button>
            </Grid>
          </div>
        </Grid>

         <Grid container spacing={2} className="about-brightspeed login-about-brightspeed">
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
      </Grid>
    </>
  );
};

export default Login;
