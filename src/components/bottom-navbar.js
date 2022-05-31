import React from "react";
import { AppBar, Toolbar, CssBaseline, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    marginLeft: "auto",
    paddingRight: "4rem",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    marginLeft: theme.spacing(5),
  },
}));

function NavbarBottom() {
  const classes = useStyles();
  const navigate = useNavigate();

  function handleClickHome(event) {
    event.preventDefault();
    navigate("/");
  }

  function handleClickEnterprise(event) {
    event.preventDefault();
    navigate("/ew/enterprise");
  }

  const breadcrumbs = [
    <Link key="1" color="inherit" to="/" onClick={handleClickHome}>
      Home
    </Link>,
    <Link
      key="2"
      color="inherit"
      to="ew/enterprise"
      onClick={handleClickEnterprise}
    >
      Enterprise
    </Link>,
    <a href="#voice-and-voip">
      <strong>Voice and VoIP</strong>
    </a>
  ];

  return (
    <React.Fragment>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <div className={classes.navlinks}>
            <a href="#sales-agent" className={classes.link}>
              Talk to a sales Agent <br />
              +19159969739
            </a>
            <a href="#request-info">
              <button className="contactus">Contact Us</button>
            </a>
          </div>
        </Toolbar>
      </AppBar>
      <p className="border-botton-navbar"></p>
      <div className="image-header">
        Internet equals <br /> opportunity.
      </div>
      <h2 className="image-sub-header">
        Get ready for a new choice in Internet <br />
        that offers the speed, simplicity, and reliability
        <br />
        you need to accomplish what’s important.
      </h2>
      <div className="img-social-1"></div>
    </React.Fragment>
  );
}
export default NavbarBottom;
