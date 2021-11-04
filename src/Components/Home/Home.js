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

	const handleOnClick = (e) => {
		e.preventDefault();
		makeApiCall();
	};

	return (
		<Link to='/rick-and-morty-universe'>
			<div id='home'>
				<h2>Who are you in R&M</h2>
				{character && <Character character={character} />}
				<button onClick={handleOnClick}>no not this</button>
			</div>
		</Link>
	);
};

export default Home;
