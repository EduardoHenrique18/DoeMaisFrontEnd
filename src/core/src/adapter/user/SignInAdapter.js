import SignInUseCase from '../../useCases/user/SignInUseCase'
import SignInService from '../../services/user/SignInService'

class SignInAdapter {
	constructor() {
		this.SignInService = new SignInService()
		this.SignInUseCase = new SignInUseCase(this.SignInService)
	}
	async SignInUser(user) {
		return await this.SignInUseCase.SignIn(user)
	}
}
export default new SignInAdapter()
