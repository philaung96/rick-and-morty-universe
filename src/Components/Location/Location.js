import './Location.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Character from '../Character/Character';

const Location = () => {
	const [location, setLocation] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/location/${id}`)
			.then((res) => res.json())
			.then((json) => setLocation(json));
	}, [id]);

	console.log(location);

	return (
		<div className='location-info'>
			{location && <p>Name: {location.name}</p>}
		</div>
	);
};

export default Location;
