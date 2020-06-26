import api from '../api/api'

export default class SignInService {
	async SignIn(user) {
		try {
			console.log(user)
			const requestInfo = {
				method: 'POST',
				body: JSON.stringify(user),
				headers: new Headers({
          'Content-Type': 'application/json'
				}),
			}
			const response = await api('login', requestInfo)
			console.log(response)
			return await response.json()
		} catch (error) {
			console.log(error.message)
		}
	}
}
