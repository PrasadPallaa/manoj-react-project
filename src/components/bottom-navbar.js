import React from "react";
import { AppBar, Toolbar, CssBaseline, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
// import image from "../images/Branding/logos_2/horizontal-photo-mock-up-computer-laptop-coffee-cup-plant-wooden-office-desk-210524413.jpg";

import image from "../images/Branding/Image Library/Brightspeed Image Library_Commercial_Retouched/RF_GettyImages-1359098561/RF_GettyImages-1359098561_Purchased 2.11.png"


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
              <button className="contactus">Contact Us</button>
          </div>
        </Toolbar>
      </AppBar>
      <p className="border-botton-navbar"></p>
      <img alt="img" src={image} className='img-enterprise'/>

    </React.Fragment>
  );
}
export default NavbarBottom;
