import ReturnHttp from '../../entities/returnHttp'

export default class CreatePointUseCase {
	constructor(createPointService) {
		this.createPointService = createPointService
	}

	async createPoint(point) {
		const response = await this.createPointService.createPoint(point)
		const returnHttp = new ReturnHttp(
			response.data,
			response.message,
			response.statusCode
		)
		return returnHttp
	}
}
