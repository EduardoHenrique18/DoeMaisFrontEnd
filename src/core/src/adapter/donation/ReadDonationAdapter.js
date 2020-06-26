import ReadDonationUseCase from '../../useCases/donation/ReadDonationUseCase'
import ReadDonationService from '../../services/donation/ReadDonationService'

class ReadDonationAdapter {
	constructor() {
		this.ReadDonationService = new ReadDonationService()
		this.ReadDonationUseCase = new ReadDonationUseCase(this.ReadDonationService)
	}
	async readDonation(pointId) {
		return await this.ReadDonationUseCase.readDonation(pointId)
	}
}
export default new ReadDonationAdapter()
