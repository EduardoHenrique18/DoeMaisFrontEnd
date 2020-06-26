import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/sign'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './auth';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
		  <Switch>
				<Route path="/" exact={true} component={App} />
				<PrivateRoute path="/home" component={Home} />
      </Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
