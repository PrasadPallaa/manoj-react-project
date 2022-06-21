import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
import styled from "styled-components";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import gradiant from "../images/Branding/logos_2/gradiant-desktop.png";
import SettingIcon from "../images/Branding/09 Icon Library/PNG/settings.png";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: black;
    }
  }
`;

const Menu = ({ open }) => {
  const pathname = window.location.pathname;
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us"></span>
        For Home
      </a>
      <a href="/">
        <NavDropdown title="For Business" id="basic-nav-dropdown">
          <NavDropdown.Item href="#">Small Business Internet</NavDropdown.Item>
          <NavDropdown.Item href="#">Small Business Voice</NavDropdown.Item>
          <NavDropdown.Item href="/mid-enterprise">
            Mid-Enterprise
          </NavDropdown.Item>
          <NavDropdown.Item href="#">Public Sector</NavDropdown.Item>
        </NavDropdown>
      </a>
      <a href="/">
        <span role="img" aria-label="contact"></span>
        About Us
      </a>
      <a href="/">
        <span role="img" aria-label="contact"></span>
        Sign In
      </a>

      {pathname !== "/home/lead" ? (
        <a href="/">
          <span role="img" aria-label="contact"></span>
          Sign In
        </a>
      ) : (
        <a href="/">
          <span role="img" aria-label="contact"></span>
          Chaithanya Nimmala
          <img src={SettingIcon} className="setting-icon" />
        </a>
      )}
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const Layout = (props) => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  const pathname = window.location.pathname;

  return (
    <>
      <div class="col align-self-end" style={{ padding: 0 }}>
        <Navbar variant="light" expand="sm" sticky="top">
          <Navbar.Brand href="/">
            <Header></Header>
          </Navbar.Brand>
          <div className="menu-icon">
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </div>
          </div>
          <Navbar.Collapse
            className="justify-content-end"
            style={{ width: "100%" }}
          >
            <div className="navbar-items">
              <Nav
                style={{
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
                {pathname !== "/home/lead" ? (
                  <Nav.Link href="#">Sign In</Nav.Link>
                ) : (
                  <Nav.Link href="#">
                    Chaithanya Nimmala
                    <img src={SettingIcon} className="setting-icon" />
                  </Nav.Link>
                )}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>

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
