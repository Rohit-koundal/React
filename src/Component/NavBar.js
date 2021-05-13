import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import Branding from "./Branding";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function NavBar() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link className="ml-5" href="#home">
                  MyAccount
                </Nav.Link>
                <Nav.Link className="ml-5 " href="#link">
                  Wishlist
                </Nav.Link>
                <Link to="/cart" className="ml-5 nav-link" href="#home">
                  My Cart
                </Link>
                <Nav.Link className="ml-5 " href="#link">
                  Checkout
                </Nav.Link>
                <Nav.Link className="ml-5 mr-5" href="#link">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Branding />
        </div>
      </div>
      <br></br>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link to="/" className="mr-4 ml-5 color light nav-link">
                HOME
              </Link>
              <Link to="/shoppage" className="mr-4 ml-3 color light nav-link">
                SHOP PAGE
              </Link>
              <Link to="/singleproduct" className="mr-4 ml-3 color nav-link">
                SINGLE PRODUCT
              </Link>
              <Link to="/cart" className="mr-4 ml-3 color nav-link">
                CART
              </Link>
              <Link to="/checkout" className="mr-4 ml-3 color nav-link">
                CHECKOUT
              </Link>
              <Link to="/category" className="mr-4 ml-3 color nav-link">
                CATEGORY
              </Link>
              <Link to="/others" className="mr-4 ml-3 color nav-link">
                OTHERS
              </Link>
              <Link to="/contact" className="mr-4 ml-3 color nav-link">
                CONTACT
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <br></br>
    </>
  );
}
