import Grid from "@mui/material/Grid";
import loginpageImage from "../../images/Branding/Image Library/Brightspeed Image Library_Commercial_Retouched/RF_GettyImages-1359098771/RF_GettyImages-1359098771_1.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Layout from "../../pages/Layout";
import Navbar from "../../components/navbar";
import Footer from '../../pages/footer';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = React.useState();
  const navigate = useNavigate();

  const onSubmit = () => {
    if (email === "anjani.mittal@brightspeed.com" || password === "password") {
      navigate("/home/lead");
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
          <img src={loginpageImage} alt="img-login" style={{ height: "90.7%", width: "99%" }} />
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
                      float: "right",
                    },
                  },
                }}
                error={email === "" && isSubmit === false}
                helperText={
                  email === "" && isSubmit === false
                    ? "Email is required!"
                    : " "
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
                <p className="forgt-pass-link">Forget Password</p>
              </label>
            </Grid>
            <Grid item className="login-button">
              <Button className="login-button-login" onClick={onSubmit}>
                Login
              </Button>
            </Grid>
          </div>
        </Grid>

        <Footer />
      </Grid>
    </>
  );
};

export default Login;
