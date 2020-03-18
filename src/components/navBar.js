import React from "react"
import { Link } from "gatsby"
import { isLoggedIn, _handleLogout } from './../services/auth'
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        <Container>
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span" >Captcherr</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Page 2
              </Nav.Link>
            </Link>
          </Nav> */}
          <Nav className="ml-auto">
            {
              isLoggedIn() ? <Button variant="outline-danger" onClick={_handleLogout}>Logout</Button> :
              <>
              <Button href="/login" className="m-2" variant="outline-primary">Login</Button>
              <Button href="/signup" className="m-2">Create Account</Button>
              </>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar
