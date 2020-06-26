import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Spinner, Modal, Button, ModalFooter, ModalHeader } from 'reactstrap'

import CreatePointModal from './modal/createPointModal'
import PointModal from './modal/pointModal'
import ReadPoint from '../core/src/adapter/point/ReadPointAdapter'

export class MapComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
      message: '',
      markClicked: {},
      confirmMarkModal: false,
      createMarkModal: false,
      pointModal: false,
      points: [],
      selectedPoint: {}
		}
  }

  async componentDidMount() {
    await this.readPoints()
  }
  
  readPoints = async () => {
    try {
      const response = await ReadPoint.readPoint()
      console.log(response)
      if (response.statusCode !== 200) {
        this.setState({ message: response.message })
      } else
        this.setState({ points: this.state.points.concat(response.data) })
    } catch(error) {
      this.setState({ message: error.message })
    }
  } 

  toggleConfirmMarker = (x, y, coord) => {
    this.setState({ markClicked: coord, confirmMarkModal: true })
  }

  toggleMarkerModal = async () => {
    await this.readPoints()
    this.setState({ createMarkModal: !this.state.createMarkModal, confirmMarkModal: false }) 

  }

  togglePointModal = () => {
    this.setState({ pointModal: !this.state.pointModal })
  }

  render() {
    const containerStyle = { 
      width: '100%',
      height: '94%'
    }
    return (
      <>
        <Modal isOpen={this.state.confirmMarkModal}>
          <ModalHeader>Deseja criar um ponto?</ModalHeader>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleMarkerModal}>Sim</Button>{' '}
            <Button color="danger" onClick={() => this.setState({ confirmMarkModal: false })}>Não</Button>
          </ModalFooter>
        </Modal>
        <Map
          google={this.props.google}
          zoom={17}
          onClick={this.toggleConfirmMarker}
          initialCenter= {{ lat: this.props.location.latitude, lng: this.props.location.longitude }}
          containerStyle={containerStyle}
          fullscreenControl={false}
          streetViewControl={false}
          mapTypeControl={false}
        >
          {this.state.points.map((point, index) => <Marker 
                key={index}
                onClick={async () => {
                  this.setState({ selectedPoint: point })
                  this.togglePointModal()}}
                name={point.name}
                position={{ lat: point.latitude, lng: point.longitude }} />)
        }
        </Map>
        { this.state.createMarkModal ? (
        <CreatePointModal
      showModal={this.state.createMarkModal}
      toggleMarkModal={this.toggleMarkerModal}
      latitude={this.state.markClicked.latLng.lat()}
      longitude={this.state.markClicked.latLng.lng()}
    />  ) :
    ('')
        }
        { this.state.pointModal ? (
        <PointModal
      showModal={this.state.pointModal}
      togglePointModal={this.togglePointModal}
      point={this.state.selectedPoint}
    />  ) :
    ('')
        }
      </>
    );
  }
}

const loadingContainer = () => {
  return (
  <div className='d-flex align-items-center justify-content-center'>
    <Spinner color="primary"/>
  </div>
  )
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY),
  language: 'portuguese',
  LoadingContainer: loadingContainer
})(MapComponent)