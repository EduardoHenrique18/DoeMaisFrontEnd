const api = async (uri, requestConfig) => {
	const url = process.env.REACT_APP_API_URI
	const response = await fetch(`${url}/${uri}`, requestConfig)
	return response
}

export default api
