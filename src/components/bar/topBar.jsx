import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap'

import '../../stylesheets/topBar.css'

export default class TopBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
  }

  render() {
    return (
      <div>
      <Navbar className='d-flex bd-highlight' color="white" light expand="md">
        <div className="mr-auto bd-highlight">
        <NavbarBrand className='topBarScore'>Score: </NavbarBrand>
        </div>
        <div className="bd-highlight">
        <Nav navbar>
          <NavItem>
            <NavLink>LogOut</NavLink>
          </NavItem>
        </Nav>
      </div>
      </Navbar>
    </div>
    );
  }
}