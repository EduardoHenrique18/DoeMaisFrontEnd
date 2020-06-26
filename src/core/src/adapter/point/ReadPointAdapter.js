import ReadPointUseCase from '../../useCases/point/ReadPointUseCase'
import ReadPointService from '../../services/point/ReadPointService'

class ReadPointAdapter {
	constructor() {
		this.ReadPointService = new ReadPointService()
		this.ReadPointUseCase = new ReadPointUseCase(this.ReadPointService)
	}
	async readPoint() {
		return await this.ReadPointUseCase.readPoint()
	}
}
export default new ReadPointAdapter()
