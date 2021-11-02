import './Home.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Character from '../Character/Character';

const Home = () => {
	const [character, setCharacters] = useState('');

	useEffect(() => {
		const random = Math.ceil(Math.random() * 671);
		fetch(`https://rickandmortyapi.com/api/character/${random}`)
			.then((res) => res.json())
			.then((json) => {
				setCharacters(json);
			});
	}, []);

	return (
		<Link to='/'>
			<div id='home'>
				<h1>Choose Your Rick and Morty Character</h1>
				{character && <Character character={character} />}
			</div>
		</Link>
	);
};

export default Home;
