import {
	Button,
	Modal,
	Alert,
	Card,
	CardImg,
	CardTitle,
	CardBody
} from 'reactstrap'

import React, { Component } from 'react'

import ReadDonationAdapter from '../../core/src/adapter/donation/ReadDonationAdapter'

import CreateDonationModal from '../modal/createDonationModal'

import DonationModal from './donationModal'

export default class PointModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: '',
			donations: [],
			CreateDonationModalIsOpen: false,
			DonationModalIsOpen: false,
			selectedDonation:{}
		}
	}

	async componentDidMount() {
    await this.readDonations()
  }
  
  readDonations = async () => {
    try {
			const response = await ReadDonationAdapter.readDonation(this.props.point.pointId.toString())
			console.log(response)
      if (response.statusCode !== 200) {
        this.setState({ message: response.message })
      } else
				this.setState({ donations: response.data })
				console.log(this.state.donations)
    } catch(error) {
      this.setState({ message: error.message })
    }
  } 

	toggleCreateDonationModal = () => {
		this.setState({ CreateDonationModalIsOpen: !this.state.CreateDonationModalIsOpen })
	}

	toggleDonationModal = () => {
		this.setState({ DonationModalIsOpen: !this.state.DonationModalIsOpen })
	}

	addDonation = (donation) => {
		console.log(donation)
		this.setState({ donations: this.state.donations.concat(donation) })
	}

	render() {
		return (
			<>
				<Modal isOpen={this.props.showModal} toggle={this.props.togglePointModal}>
					{this.state.message !== '' ? (
						<Alert color='danger' className='text-center'>
							{' '}
							{this.state.message}{' '}
						</Alert>
					) : (
						''
					)}
          <div style={{ height:'90vh' }}>
							<img alt={this.props.point.name} style={{ width:'100%', height:'30%' }} src={this.props.point.image} />
							<div className='overflow-auto' style={{ width:'100%', height:'20%', backgroundColor:'#4e73df', wordWrap:'break-word' }}>
								<p style={{ color:'white' }} className='text-center'>{this.props.point.name}</p>
								<p style={{ color:'white' }} className='text-left'>{this.props.point.description}</p>
							</div>
								<div style={{ width:'100%', height:'10%', backgroundColor:'#4e73df' }} className='d-flex flex-row-reverse align-items-center'>
									<Button color="link" onClick={
										this.toggleCreateDonationModal
									} className='d-flex rounded-circle '>
										<i style={{ color:'white', fontSize:'50px' }} className="material-icons md-36">
											add_circle
										</i></Button>
								</div>
						<div className='container' style={{ height:'40%', backgroundImage: 'linear-gradient(180deg,#4e73df 10%,#224abe 100%)' }}>
							<div className='row d-flex justify-content-center overflow-auto' style={{ maxHeight: '100%' }}>
								{
									this.state.donations[0] ? (
									this.state.donations.map((donation, index) => 
										<Card onClick={() => {
											this.setState({ selectedDonation: donation })
											this.toggleDonationModal()}} className='col-12 col-sm-5' style={{ margin:'2%', cursor:'pointer', padding:'0' }} key={index}>
											<CardImg top width="100%" src={donation.image} alt="Card image cap" />
											<CardBody>
												<CardTitle>{donation.userName}</CardTitle>
											</CardBody>
										</Card>
									)
									)
									:
									('')
								}
							</div>
						</div>
          </div>
				</Modal>
				{ this.state.CreateDonationModalIsOpen ? (
        <CreateDonationModal
			point={this.props.point}
			toggleCreateDonationModal={this.toggleCreateDonationModal}
			CreateDonationModalIsOpen={this.state.CreateDonationModalIsOpen}
			ClosePointModal={this.props.togglePointModal}
			addDonation={this.addDonation}
    />  ) :
    ('')
        }
						{ this.state.DonationModalIsOpen ? (
        <DonationModal
			donation={this.state.selectedDonation}
			toggleDonationModal={this.toggleDonationModal}
			DonationModalIsOpen={this.state.DonationModalIsOpen}
    />  ) :
    ('')
        }
			</>
		)
	}
}
