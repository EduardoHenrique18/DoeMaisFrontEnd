import CreatePointUseCase from '../../useCases/point/CreatePointUseCase'
import CreatePointService from '../../services/point/CreatePointService'

class CreatePointAdapter {
	constructor() {
		this.CreatePointService = new CreatePointService()
		this.CreatePointUseCase = new CreatePointUseCase(this.CreatePointService)
	}
	async createPoint(point) {
		return await this.CreatePointUseCase.createPoint(point)
	}
}
export default new CreatePointAdapter()
