import api from '../api/api'

export default class SignUpService {
	async signUp(user) {
		try {
			const requestInfo = {
				method: 'POST',
				body: JSON.stringify(user),
				headers: new Headers({
          'Content-Type': 'application/json'
				}),
			}
			const response = await api('user', requestInfo)
			return await response.json()
		} catch (error) {
			console.log(error.message)
		}
	}
}
