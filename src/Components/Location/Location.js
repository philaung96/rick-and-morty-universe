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

	// let residentJsx = [];
	// if (location.residents) {
	// 	residentJsx = location.residents.map((resident) => {});
	// }

	// console.log(location);

	return (
		location && (
			<div className='location-info'>
				<h1>Location</h1>
				<p>{location.name}</p>
				<p>Type: {location.type}</p>
				<p>Dimension: {location.dimension}</p>
			</div>
		)
	);
};

export default Location;
