import './App.css';
import Character from '../Character/Character';
import React, { useState, useEffect } from 'react';

function App() {
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
		<div className='App'>
			<h1>Choose Your Rick and Morty Character</h1>
			{character && <Character character={character} />}
		</div>
	);
}

export default App;
