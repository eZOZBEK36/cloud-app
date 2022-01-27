import React from 'react'
import App from './App.jsx'
import './styles/Style.scss'
import ReactDOM from 'react-dom'
import { store } from './redux/index'
import { Provider } from 'react-redux'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
)
