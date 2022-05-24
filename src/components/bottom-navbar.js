import React from "react";
import { AppBar, Toolbar, CssBaseline, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    marginLeft:"auto",
    paddingRight: "4rem"
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

  return (
    <React.Fragment>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <h6 className="toolbar-header">Voice and VoIP</h6>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Talk to a sales representative <br />
              +19159969739
            </Link>
             <a href="#request-info">
             <button className="contactus">Contact Us</button>
               </a> 
          </div>
        </Toolbar>
      </AppBar>
      <p className="border-botton-navbar"></p>
      <div className="img-social-1"></div>

    </React.Fragment>
  );
}
export default NavbarBottom;
