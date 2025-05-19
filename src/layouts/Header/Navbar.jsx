import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/Logo.png"; 

const HeaderNavbar = () => {
  return (
    <Navbar expand="lg" className="w-100">
      <Container
        fluid
        className="header-navbar w-100 d-flex justify-content-between"
      >
        <Navbar.Brand href="#" className="me-auto">
          <img
            src={logo}
            width="100"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto d-flex align-items-center gap-2">
          <NavDropdown
            title={"Investor Relations"}
            id="InvestorRelationsDropdown"
          >
              <NavDropdown.Item href="">{"Overvirew"}</NavDropdown.Item>
              <NavDropdown.Item href="">{"Profile"}</NavDropdown.Item>
              <NavDropdown.Item href="">
                {"Board of Directors"}
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                {"Executive Management"}
              </NavDropdown.Item>
              <NavDropdown.Item href="">{"Share Performance"}</NavDropdown.Item>
              <NavDropdown.Item href="">
                {"Financial Performance"}
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                {"Investment Presentation"}
              </NavDropdown.Item>
              <NavDropdown.Item href="">{"Announcements"}</NavDropdown.Item>
              <NavDropdown.Item href="">{"Corporate Actions"}</NavDropdown.Item>
              <NavDropdown.Item href="">
                {"Major Shareholders"}
              </NavDropdown.Item>
              <NavDropdown.Item href="">{"Business Segments"}</NavDropdown.Item>
              <NavDropdown.Item href="">
                {"Mergers & Acquisitions"}
              </NavDropdown.Item>
              <NavDropdown.Item href="">{"Contact IR"}</NavDropdown.Item>
          </NavDropdown>

          <Button className="languge-switcher">{"English"}</Button>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
