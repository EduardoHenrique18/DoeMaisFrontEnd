import api from '../api/api'

export default class ReadDonationService {
	async readDonation(pointId) {
		try {
      const requestInfo = {
				method: 'GET',
				headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
				}),
			}
			const response = await api(`donation/${pointId}`, requestInfo)
			return await response.json()
		} catch (error) {
			console.log(error.message)
		}
	}
}
