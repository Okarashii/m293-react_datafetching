import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function FetchDisplay({url}) {
	const [data, setData] = useState({hits: []});
	const [user, setUser] = useState({results: []});

	useEffect(() => {
		async function fetchDataHits() {
			const result = await axios(url);
			setData(result.data);
		}

		fetchDataHits();
	}, []);

	return (
		<div>
			<header>Data-Hits with REACT-functional</header>
			<h3>Data Hits Example</h3>
			<ul>
				{data.hits.map((item) => (
					<li key={item.objectID}>
						<a href={item.url}>{item.title ?? item.story_title}</a>
					</li>
				))}
			</ul>
		</div>
	);
}