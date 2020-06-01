const api = async (uri, methodHttp, data) => {
	const url = process.env.REACT_APP_API_URI
	const requestInfo = {
		method: `${methodHttp}`,
		body: JSON.stringify(data),
		headers: new Headers({
			'Content-Type': 'application/json',
		}),
	}
	const response = await fetch(`${url}/${uri}`, requestInfo)
	return response
}

export default api
