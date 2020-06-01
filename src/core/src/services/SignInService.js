import api from './api/api'

export default class SignInService {
	async SignIn(user) {
		try {
			const response = await api('login', 'POST', user)
			return await response.json()
		} catch (error) {
			console.log(error.message)
		}
	}
}
