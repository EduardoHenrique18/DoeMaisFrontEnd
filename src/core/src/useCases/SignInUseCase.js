import ReturnHttp from '../entities/returnHttp'

export default class SignInUseCase {
	constructor(SignInService) {
		this.SignInService = SignInService
	}

	async SignIn(user) {
		const response = await this.SignInService.SignIn(user)
		const returnHttp = new ReturnHttp(
			response.data,
			response.message,
			response.statusCode
		)
		return returnHttp
	}
}
