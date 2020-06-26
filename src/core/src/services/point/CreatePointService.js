import api from '../api/api'

export default class CreatePointService {
	async createPoint(point) {
		try {
			const requestInfo = {
				method: 'POST',
				body: JSON.stringify(point),
				headers: new Headers({
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`, 
				}),
			}
			const response = await api('point', requestInfo)
			return await response.json()
		} catch (error) {
			console.log(error.message)
		}
	}
}
