import './Characters.css';
import { useEffect, useState } from 'react';
import Character from './Character/Character';

const Characters = () => {
	const [characters, setCharacters] = useState([]);

	const makeApiCall = (url) => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setCharacters(json));
	};

	useEffect(() => {
		makeApiCall('https://rickandmortyapi.com/api/character');
	}, []);

	let charactersJsx = [];
	if (characters.results) {
		charactersJsx = characters.results.map((characterObj, index) => (
			<Character character={characterObj} key={index} />
		));
	}

	const handleOnClickPrev = () => {
		makeApiCall(characters.info.prev);
	};

	const handleOnClickNext = () => {
		makeApiCall(characters.info.next);
	};

	return (
		<>
			<h1>Characters</h1>
			<div id='characters'>{charactersJsx}</div>
			<div id='characters-buttons'>
				{characters.info && characters.info.prev && (
					<button onClick={handleOnClickPrev}>&lt; prev</button>
				)}
				{characters.info && characters.info.next && (
					<button onClick={handleOnClickNext}>next &gt;</button>
				)}
			</div>
		</>
	);
};

export default Characters;
