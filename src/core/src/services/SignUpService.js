import api from './api/api'

export default class SignUpService {
	async signUp(user) {
		try {
			const response = await api('user', 'POST', user)
			return await response.json()
		} catch (error) {
			console.log(error.message)
		}
	}
}
