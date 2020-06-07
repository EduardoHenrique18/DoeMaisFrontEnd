import React, { Component } from 'react'
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText } from 'reactstrap'

import '../stylesheets/topBar.css'

export default class TopBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
  }

  render() {
    return (
      <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand className='topBarScore'>Score: </NavbarBrand>
        <NavbarToggler />
      </Navbar>
    </div>
    );
  }

}