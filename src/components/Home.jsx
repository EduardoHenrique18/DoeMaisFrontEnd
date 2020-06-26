import React, { Component } from 'react'

import SideBar from './bar/sideBar'
import MapComponent from './Map'
import TopBar from './bar/topBar'

import '../stylesheets/home.css'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
      latitude: '',
      longitude: '',
    }
    this.getLocation = this.getLocation.bind(this)
    this.getCoordinates = this.getCoordinates.bind(this)
  }

  componentDidMount() {
    this.getLocation()
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      this.setState({ message:  'Geolocation is not supported by this browser.' })
    }
  }

  getCoordinates = (position) => {
    this.setState({ 
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }

  render() {
    return (
      <div className="wrapper" style={{ minHeight: '100vh' }}>
        <div className='container' style={{ maxWidth: '100%', minHeight: '100vh' }}>
          <div className='row'>
            <div className='col-3 col-sm-2 col-xl-1' style={{ padding: '0' }}>
              <SideBar></SideBar>
            </div>
            <div className='col-9 col-sm-10 col-xl-11' style={{ padding: '0' }}>
              <TopBar></TopBar>
              <div style={{ maxHeight: '94vh', height:'94vh' }}>
                <MapComponent location={{ latitude: this.state.latitude, longitude: this.state.longitude }}></MapComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}