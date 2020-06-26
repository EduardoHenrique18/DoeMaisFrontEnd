import ReturnHttp from '../../entities/returnHttp'

export default class ReadPointUseCase {
	constructor(readPointService) {
		this.readPointService = readPointService
	}

	async readPoint() {
		const response = await this.readPointService.ReadPoint()
		const returnHttp = new ReturnHttp(
			response.data,
			response.message,
			response.statusCode
		)
		return returnHttp
	}
}
