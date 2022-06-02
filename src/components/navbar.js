import React from "react";
import { AppBar, Toolbar, CssBaseline, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(181),
    display: "flex",
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
    "&:hover": {
      //   color: "yellow",
      //   textDecoration: "none",
      //   borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="top-navbar">
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Careers
            </Link>
            <Link to="/about" className={classes.link}>
              Contact Us
            </Link>
            <NavDropdown title="Support" id="basic-nav-dropdown" className={classes.link}>
              <NavDropdown.Item href="#">
                Small Business Internet
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Small Business Voice</NavDropdown.Item>
              <NavDropdown.Item href="/mid-enterprise">
                Mid-Enterprise
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Public Sector</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Toolbar>
      </AppBar>
      <p className="border-botton-navbar"></p>
      </div>

    </React.Fragment>
  );
}
export default Navbar;
