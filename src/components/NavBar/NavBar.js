import React, { useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Button, Form, FormControl, Nav, NavLink, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { navbarBrand, navs } from "../../config/config";
import logoImage from "../Images/logoImage.png";
import { btnColor, formInput, logo, nav, navBar, navBrand, closeBtn, searchForm } from "./index";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { UserProfile } from "@clerk/clerk-react";
function NavBar() {
  const navigate = useNavigate();

  const navRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
    setSearchQuery("");
    setIsCollapsed(true);
  };

  const handleNavClick = () => {
    setIsCollapsed(true);
  };

  const isSearchButtonDisabled = searchQuery.trim() === "";

  const [isok, setIsok] = useState(true);
  const urlSign = "//upward-malamute-18.accounts.dev/sign-in";
  return (
    <>
      <Navbar
        ref={navRef}
        style={navBar}
        variant="dark"
        expand="lg"
        fixed="top"
        expanded={!isCollapsed}
      >
        <Navbar.Brand style={navBrand} href="/">
          <NavLink to="/">
            <img src={logoImage} alt="Logo" style={logo} />
            {navbarBrand}
          </NavLink>
        </Navbar.Brand>
        {isCollapsed && (
          <Navbar.Toggle
            className="border-0"
            aria-controls="basic-navbar-nav"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        )}

        {!isCollapsed && (
          <IoCloseOutline
            size={40}
            style={closeBtn}
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        )}
        <Navbar.Collapse id="basic-navbar-nav">
          {
            isok ? <Nav style={nav} className="mr-auto" onClick={handleNavClick}>
              {navs.map((navItem) => (
                <LinkContainer to={navItem.page} key={uuidv4()}>
                  <Nav.Link className="ml-2">{navItem.nav}</Nav.Link>
                </LinkContainer>
              ))}
            </Nav> : <Nav style={nav} className="ml-auto" onClick={handleNavClick}>
              <LinkContainer to="/" key={uuidv4()}>
                <Nav.Link className="ml-2">Home</Nav.Link>
              </LinkContainer>
            </Nav>
          }
          <SignedOut>
          <LinkContainer to={urlSign} key={uuidv4()}>
                <Nav.Link className="ml-2">Signin/Signup</Nav.Link>
              </LinkContainer>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Form style={searchForm} onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Explore news..."
              style={formInput}
              className="form-control-lg bg-dark mt-lg-2 mt-md-2 mt-sm-2 mt-xl-0 text-white shadow-sm border-dark"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Button
              className="btn custom-btn mt-lg-2 ml-2 mt-md-2 mt-sm-2 mt-xl-0 shadow-sm"
              style={btnColor}
              onClick={handleSubmit}
              disabled={isSearchButtonDisabled}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
