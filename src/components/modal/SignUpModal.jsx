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

import React, { Component } from 'react'

import SignUp from '../../core/src/adapter/user/SignUpAdapter'

export default class SignUpModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			password: '',
			email: '',
			dateOfBirth: '',
			message: '',
		}
	}

	CreateUser = async (user) => {
		const response = await SignUp.signUpUser(user)
		if (response.statusCode !== 200) {
			this.setState({ message: response.message })
		} else
		this.props.toggleModal()
	}

	render() {
		return (
			<>
				<Modal isOpen={this.props.showModal} toggle={this.props.toggleModal}>
					{this.state.message !== '' ? (
						<Alert color='danger' className='text-center'>
							{' '}
							{this.state.message}{' '}
						</Alert>
					) : (
						''
					)}
					<ModalHeader>Criar sua conta</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label for='name'>Nome</Label>
								<Input
									style={{ color: '#000' }}
									type='text'
									id='nomeCadastro'
									onChange={(e) => {
										this.setState({ userName: e.target.value })
									}}
									placeholder='Informe seu nome'
								/>
							</FormGroup>
							<FormGroup>
								<Label for='email'>Email</Label>
								<Input
									style={{ color: '#000' }}
									type='text'
									id='emailCadastro'
									onChange={(e) => {
										this.setState({ email: e.target.value })
									}}
									placeholder='Informe seu e-mail'
								/>
							</FormGroup>
							<FormGroup>
								<Label for='bornDate'>Data de nascimento</Label>
								<Input
									style={{ color: '#000' }}
									type='date'
									id='dtNascimentoCadastro'
									onChange={(e) => {
										this.setState({ dateOfBirth: e.target.value })
									}}
									placeholder='Informe sua data de nascimento'
								/>
							</FormGroup>
							<FormGroup>
								<Label for='password'>Senha</Label>
								<Input
									style={{ color: '#000' }}
									type='password'
									id='passwordCadastro'
									onChange={(e) => {
										this.setState({ password: e.target.value })
									}}
									placeholder='Informe sua senha'
								/>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button
							color='danger'
							onClick={() => {
								this.props.toggleModal()
							}}
						>
							Cancelar
						</Button>
						<Button
							color='primary'
							onClick={async () => {
								this.CreateUser({	
									userName: this.state.userName,
									email: this.state.email,
									dateOfBirth: this.state.dateOfBirth,
									password: this.state.password
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
