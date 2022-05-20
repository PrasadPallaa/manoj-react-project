import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import gradiant from '../images/Branding/logos_2/gradiant-desktop.png'

const Layout = () => {
  // const mystyle = {
  //   background: "linear-gradient(to right, red, yellow)",
  //   height: 7,
  //   margin: 0,
  // };

  return (
    <>
          <div class="col align-self-end" style={{ padding: 0 }}>
            <Navbar variant="light" expand="sm" sticky="top">
              <Navbar.Brand href="/">
                <Header></Header>
              </Navbar.Brand>
              <Navbar.Collapse
                className="justify-content-end"
                style={{ width: "100%", marginRight: "1rem" }}
              >
                <Nav
                  style={{
                    marginRight: "2rem",
                    fontWeight: "500",
                    color: "black",
                  }}
                >
                  <Nav.Link href="/">
                    <strong></strong> For Home
                  </Nav.Link>
                  <NavDropdown title="For Business" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">
                      Small Business Internet
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Small Business Voice
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/mid-enterprise">
                      Mid-Enterprise
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">Public Sector</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/contact">About Us</Nav.Link>
                  <Nav.Link href="#">Sign In</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            {/* <hr style={mystyle} /> */}
            <img alt="gradiant" src={gradiant} className="gradiant-image" />

          </div>
          <div>
            <Outlet />
            <Footer></Footer>
          </div>
    </>
  );
};

export default Layout;
