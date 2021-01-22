import React, { Component } from "react";
import { MDBNavbar, 
  MDBNavbarBrand, 
  MDBNavbarNav, 
  MDBNavItem, 
  MDBNavLink, 
  MDBNavbarToggler, 
  MDBCollapse, 
  // MDBDropdown,
  // MDBDropdownToggle, 
  // MDBDropdownMenu, 
  // MDBDropdownItem, 
  MDBIcon } from "mdbreact";
// import { BrowserRouter as Router } from 'react-router-dom';

class NavBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
   
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">ListedFirst</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBNavLink to="#!">Web Services & Design</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">SEO & Marketing</MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
              <MDBNavLink to="/contact">Contact</MDBNavLink>
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Small Business Services</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Taxes</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Accounting</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Human Resources</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Customer Service</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="instagram" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="linkedin" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
   
    );
  }
}

export default NavBar;