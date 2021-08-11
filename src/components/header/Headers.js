import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Headers = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto mx-auto"  navbar>
            <NavItem>
              <NavLink href="/components/">Quem somos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Informações</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contatos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
 
export default Headers;
