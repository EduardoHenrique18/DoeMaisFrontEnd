import React, { Component } from 'react'

import {
	Form,
	Label,
	Input,
	Button,
	FormGroup,
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter,
	Alert,
	ButtonGroup
} from 'reactstrap'

import ImageUploader from "react-images-upload";

import CreateDonationAdapter from '../../core/src/adapter/donation/CreateDonationAdapter'

export default class CreateDonationModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			description: '',
			image: null,
			isPublic: true,
      message: ''
		}
	}

	CreateDonation = async (donation) => {
		const response = await CreateDonationAdapter.createDonation(donation)
		if (response.statusCode !== 200) {
			this.setState({ message: response.message })
		} else
		//this.props.addDonation(response.data)
		this.props.ClosePointModal()
		this.props.toggleCreateDonationModal()
	}

  setImage = (image, imageBase64) => {
    this.setState({
      image: imageBase64,
  	});
  }

	render() {
		return (
			<>
				<Modal isOpen={this.props.CreateDonationModalIsOpen} toggle={this.props.toggleCreateDonationModal}>
					{this.state.message !== '' ? (
						<Alert color='danger' className='text-center'>
							{' '}
							{this.state.message}{' '}
						</Alert>
					) : (
						''
					)}
					<ModalHeader>Doar</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label for='name'>Nome</Label>
								<Input
									style={{ color: '#000' }}
									type='text'
									id='name'
									onChange={(e) => {
										this.setState({ name: e.target.value })
									}}
									placeholder='Informe o nome'
								/>
							</FormGroup>
							<FormGroup>
								<Label for='description'>Descrição</Label>
								<Input
									style={{ color: '#000' }}
									type='text'
									id='description'
									onChange={(e) => {
										this.setState({ description: e.target.value })
									}}
									placeholder='Informe a descrição'
								/>
							</FormGroup>
							<FormGroup>
								<Label for='description'>Publico?</Label>
								<ButtonGroup>
									<Button color="primary" onClick={() => this.setState({ isPublic: true })} active={this.state.isPublic === true}>sim</Button>
									<Button color="primary" onClick={() => this.setState({ isPublic: false })} active={this.state.isPublic === false}>não</Button>
								</ButtonGroup>
							</FormGroup>
							<FormGroup>
								<Label for='image'>Imagem</Label>
                <ImageUploader
                  withIcon={true}
                  buttonText="Selecionar Imagem"
                  onChange={this.setImage}
                  imgExtension={['.jpg', '.png']}
                  maxFileSize={5242880}
                  singleImage={true}
                  withPreview={true}
                />
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button
							color='danger'
							onClick={
								this.props.toggleCreateDonationModal
							}
						>
							Cancelar
						</Button>
						<Button
							color='primary'
							onClick={async () => {
								await this.CreateDonation({ 
                  name: this.state.name,
                  description: this.state.description,
									image: this.state.image[0],
									isPublic: this.state.isPublic.toString(),
									pointId: this.props.point.pointId
                 })
							}}
						>
							Doar!
						</Button>
					</ModalFooter>
				</Modal>
			</>
		)
	}
}
