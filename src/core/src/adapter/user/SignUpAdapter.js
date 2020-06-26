import SignUpUseCase from '../../useCases/user/signUpUseCase'
import SignUpService from '../../services/user/SignUpService'

class SignUpAdapter {
	constructor() {
		this.SignUpService = new SignUpService()
		this.SignUpUseCase = new SignUpUseCase(this.SignUpService)
	}
	async signUpUser(user) {
		return await this.SignUpUseCase.signUp(user)
	}
}
export default new SignUpAdapter()
