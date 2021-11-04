import './Home.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Character from '../Character/Character';

const Home = () => {
	const [character, setCharacters] = useState('');

	const random = () => {
		return Math.ceil(Math.random() * 671);
	};

	const url = `https://rickandmortyapi.com/api/character/${random()}`;

	const makeApiCall = () => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setCharacters(json);
			});
	};

	useEffect(() => {
		makeApiCall();
	}, []);

	const handleOnClick = () => {
		makeApiCall();
	};

	return (
		<Link to='/'>
			<div id='home'>
				<h2>Choose Your Rick and Morty Character</h2>
				{character && <Character character={character} />}
				<button onClick={handleOnClick}>get me next</button>
			</div>
		</Link>
	);
};

export default Home;
