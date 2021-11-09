import './Episodes.css';
import { useEffect, useState } from 'react';
import Episode from './Episode/Episode';
import { useRef } from 'react/cjs/react.development';

const Episodes = () => {
	const [episodes, setEpisodes] = useState([]);
	const inputName = useRef(null);

	const makeApiCall = (url) => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setEpisodes(json));
	};

	useEffect(() => {
		makeApiCall('https://rickandmortyapi.com/api/episode');
	}, []);

	const handleOnClickPrev = () => {
		makeApiCall(episodes.info.prev);
	};

	const handleOnClickNext = () => {
		makeApiCall(episodes.info.next);
	};
	let episodesJsx = [];
	if (episodes.results)
		episodesJsx = episodes.results.map((episode) => (
			<Episode episodeData={episode} key={episode.id} />
		));

	const handleOnSubmit = (e) => {
		e.preventDefault();
		makeApiCall(
			`https://rickandmortyapi.com/api/episode/?name=${inputName.current.value}`
		);
		inputName.current.value = '';
	};
	return (
		<>
			<h1>Explore Episodes</h1>
			<form onSubmit={handleOnSubmit}>
				<input
					ref={inputName}
					type='text'
					placeholder='The Ricks Must Be Crazy'></input>
				<button type='submit'>Search</button>
			</form>
			<div id='episodes'>{episodesJsx}</div>
			<div id='episodes-buttons'>
				{episodes.info && episodes.info.prev && (
					<button onClick={handleOnClickPrev}>&lt; prev</button>
				)}
				{episodes.info && episodes.info.next && (
					<button onClick={handleOnClickNext}>next &gt;</button>
				)}
			</div>
		</>
	);
};

export default Episodes;
