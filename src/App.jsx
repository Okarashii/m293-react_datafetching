import React from 'react';
import "./App.css";
import FetchDisplay from './components/FetchDisplay/FetchDisplay';

const url = "https://hn.algolia.com/api/v1/search?query=react-fetch";

function App() {
	return (
		<div className="App">
			<FetchDisplay url={url}/>
		</div>
	);
}

export default App;
