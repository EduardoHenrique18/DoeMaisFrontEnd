import CreateDonationUseCase from '../../useCases/donation/CreateDonationUseCase'
import CreateDonationService from '../../services/donation/CreateDonationService'

class CreateDonationAdapter {
	constructor() {
		this.CreateDonationService = new CreateDonationService()
		this.CreateDonationUseCase = new CreateDonationUseCase(this.CreateDonationService)
	}
	async createDonation(donation) {
		return await this.CreateDonationUseCase.createDonation(donation)
	}
}
export default new CreateDonationAdapter()
