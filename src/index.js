import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './store';
import 'antd/dist/antd.css';

// import api from './api';

// api.test()
// 	.then(({ data }) => console.log('response', data))

// .then(({ data }) => console.log('response2', data))

ReactDOM.render(
	(
		<StoreProvider>
			<App />
		</StoreProvider>
	),
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
