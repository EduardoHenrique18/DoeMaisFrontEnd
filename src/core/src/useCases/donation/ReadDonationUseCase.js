import ReturnHttp from '../../entities/returnHttp'

export default class ReadDonationUseCase {
	constructor(readDonationService) {
		this.readDonationService = readDonationService
	}

	async readDonation(pointId) {
		try {
			const response = await this.readDonationService.readDonation(pointId)
			const returnHttp = new ReturnHttp(
				response.data,
				response.message,
				response.statusCode
			)
			return returnHttp
		} catch (error) {
			return { message: 'failed' }
		}

	}
}
