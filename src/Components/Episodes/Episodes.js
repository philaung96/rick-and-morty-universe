import './Episodes.css';
import { useEffect, useState } from 'react';
import Episode from './Episode/Episode';

const Episodes = () => {
	const [episodes, setEpisodes] = useState([]);

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

	return (
		<>
			<h1>Explore Episodes</h1>
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
