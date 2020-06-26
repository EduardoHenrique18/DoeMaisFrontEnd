import ReturnHttp from '../../entities/returnHttp'

export default class CreateDonationUseCase {
	constructor(createDonationService) {
		this.createDonationService = createDonationService
	}

	async createDonation(donation) {
		try {
			const response = await this.createDonationService.createDonation(donation)
			const returnHttp = new ReturnHttp(
				response.data,
				response.message,
				response.statusCode
			)
			console.log(returnHttp)
			return returnHttp
		} catch (error) {
			return { message: 'failed' }
		}

	}
}
