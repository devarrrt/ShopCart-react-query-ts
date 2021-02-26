import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query'


const clietn = new QueryClient()

ReactDOM.render(
	<QueryClientProvider client={ clietn } >
    <App />
	</QueryClientProvider>,
  document.getElementById('root')
);


reportWebVitals();
