import Grid from "@mui/material/Grid";
import brspdlogo from "../../images/Branding/01 Logo/Logo/Full Color/Digital/Brightspeed_Logo_Full_Color_RGB_864px@72ppi.png";
import loginpageImage from "../../images/Branding/Image Library/Brightspeed Image Library_Commercial_Retouched/RF_GettyImages-1359098771/RF_GettyImages-1359098771_1.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = React.useState();

  const onSubmit = () => {
    if (email === "anjani.mittal@brightspeed.com" || password === "password") {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <img src={brspdlogo} alt="logo" className="img-brightspeed-login" />
          <img
            src={loginpageImage}
            style={{ height: "90.7%", width: "100%" }}
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
                <Link to={isSubmit === true && "/home/lead"}>Login</Link>
              </Button>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
