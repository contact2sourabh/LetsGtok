import React, { useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import icon from "./icon.png";
import './nav.css'
import Contact from '../Contact/Contact'
const Navb = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <div>

        <Navbar color="light" light expand="md">
          <img className="icon" src={icon} alt="icon" />
          <NavbarBrand style={{ color: "#8616e0", fontWeight: 'bold' }} className="title" href="/">Lets Gtok</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Nav className="mr-auto" navbar>
            <NavItem >
              <NavLink className="about" href="/About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="blogs" href="/Blogs">Blogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="career" href="/Career">Career</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="contact" href="../Contact/Contact">Contact</NavLink>
            </NavItem>
          </Nav>

        </Navbar>
      </div>
    </div>


  );
};

export default Navb;