import api from '../api/api'

export default class CreateDonationService {
	async createDonation(donation) {
		try {
			const requestInfo = {
				method: 'POST',
				body: JSON.stringify(donation),
				headers: new Headers({
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
				}),
			}
			const response = await api('donation', requestInfo)
			return await response.json()
		} catch (error) {
			console.log(error.message)
		}
	}
}
