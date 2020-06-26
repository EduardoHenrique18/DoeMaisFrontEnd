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
} from 'reactstrap'

import ImageUploader from "react-images-upload";

import CreatePoint from '../../core/src/adapter/point/CreatePointAdapter'

export default class CreatePointModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			description: '',
			image: null,
      message: ''
		}
	}

	CreatePoint = async (point) => {
		const response = await CreatePoint.createPoint(point)
		if (response.statusCode !== 200) {
			this.setState({ message: response.message })
		} else
		this.props.toggleMarkModal()
	}

  setImage = (image, imageBase64) => {
    this.setState({
      image: imageBase64,
  	});
  }

	render() {
		return (
			<>
				<Modal isOpen={this.props.showModal} toggle={this.props.toggleMarkModal}>
					{this.state.message !== '' ? (
						<Alert color='danger' className='text-center'>
							{' '}
							{this.state.message}{' '}
						</Alert>
					) : (
						''
					)}
					<ModalHeader>Criar ponto</ModalHeader>
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
							onClick={() => {
								this.props.toggleMarkModal()
							}}
						>
							Cancelar
						</Button>
						<Button
							color='primary'
							onClick={async () => {
								this.CreatePoint({ 
                  name: this.state.name,
                  description: this.state.description,
                  image: this.state.image[0],
                  latitude: this.props.latitude.toString(),
                  longitude: this.props.longitude.toString()
                 })
							}}
						>
							Cadastrar
						</Button>
					</ModalFooter>
				</Modal>
			</>
		)
	}
}
