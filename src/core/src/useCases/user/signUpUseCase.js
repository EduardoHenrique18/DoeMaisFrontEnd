import ReturnHttp from '../../entities/returnHttp'

export default class SignUpUseCase {
	constructor(signUpService) {
		this.signUpService = signUpService
	}

	async signUp(user) {
		const response = await this.signUpService.signUp(user)
		const returnHttp = new ReturnHttp(
			response.data,
			response.message,
			response.statusCode
		)
		return returnHttp
	}
}
