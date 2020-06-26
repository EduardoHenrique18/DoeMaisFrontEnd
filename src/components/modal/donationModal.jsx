import {
	Modal,
	Alert,
} from 'reactstrap'

import React, { Component } from 'react'

export default class DonationModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
      message: ''
		}
	}

	render() {
		return (
			<>
				<Modal isOpen={this.props.DonationModalIsOpen} toggle={this.props.toggleDonationModal}>
					{this.state.message !== '' ? (
						<Alert color='danger' className='text-center'>
							{' '}
							{this.state.message}{' '}
						</Alert>
					) : (
						''
					)}
          <div style={{ height:'90vh' }}>
							<img alt={this.props.donation.name} style={{ width:'100%', height:'40%' }} src={this.props.donation.image} />
							<div className='overflow-auto' style={{ width:'100%', height:'60%', backgroundColor:'#4e73df', wordWrap:'break-word' }}>
								<p style={{ color:'white' }} className='text-center'>{this.props.donation.userName}</p>
								<p style={{ color:'white' }} className='text-left'>{this.props.donation.description}</p>
							</div>
          </div>
				</Modal>
			</>
		)
	}
}
