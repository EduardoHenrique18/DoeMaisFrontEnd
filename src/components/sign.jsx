import { Form, Label, Input, Button, FormGroup, Alert } from 'reactstrap'

import React, { Component } from 'react'

import '../stylesheets/sign.css'

import SignUpModal from './SignUpModal'

import SignIn from '../core/src/adapter/SignInAdapter'

export default class SignInComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showModal: false,
			message: ''
		}
	}

	toggleModal = () => {
		this.setState({ showModal: !this.state.showModal })
	}

	signIn = async (user) => {
		const response = await SignIn.SignInUser(user)
		if (response.statusCode !== 200) {
			this.setState({ message: response.message })
		} else
			localStorage.setItem('user', JSON.stringify(response.data));
			this.props.history.push("");
	}

	render() {
		return (
			<>
			<div style={{ height: '700px' }} className='d-flex flex-row-reverse bd-highlight align-items-center'>
				<Form style={{ width: '400px' }} className='w-25 p-3'>
				{this.state.message !== '' ? (
				<Alert color='danger' className='text-center'>
					{' '}
					{this.state.message}{' '}
				</Alert>
			) : (
				''
			)}
					<FormGroup>
						<Label for='email'>Email</Label>
						<Input type='text' id='email' placeholder='Informe seu e-mail' />
					</FormGroup>
					<FormGroup>
						<Label for='password'>Senha</Label>
						<Input
							type='password'
							id='password'
							placeholder='Informe a senha'
						/>
					</FormGroup>
					<Button color='info' block>
						Entrar
					</Button>
					<Button
						color='link'
						block
						onClick={() => this.setState({ showModal: true })}
					>
						Cadastre-se!
					</Button>
					<SignUpModal
						showModal={this.state.showModal}
						toggleModal={this.toggleModal}
					/>
				</Form>
			</div>
			</>
		)
	}
}
