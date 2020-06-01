import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/sign'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
	<React.StrictMode>
		<App style={{ height: '100px' }}/>
	</React.StrictMode>,
	document.getElementById('root')
)
