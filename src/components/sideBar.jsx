import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import '../stylesheets/sideBar.css'

export default class SideBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
  }

  render() {
    return (
        <div>
        <Nav vertical style={{ background: '#4e73df', backgroundImage: 'linear-gradient(180deg,#4e73df 10%,#224abe 100%)', minHeight:'100vh'}} className='d-flex justify-content-start align-items-center'>
        <p className='titleWord'>DOE+</p>
        <hr className='sideBarDivisor'/>
        <NavItem>
          <NavLink href="#" className='sideBarWords'>Doações</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className='sideBarWords'>Perfil</NavLink>
        </NavItem>
      </Nav>
        </div>
    );
  }

}