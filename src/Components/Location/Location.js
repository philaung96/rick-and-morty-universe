import './Location.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Residents from '../../Residents/Residents';

const Location = () => {
	const [location, setLocation] = useState(null);
	const { id } = useParams();
	let residentComp = null;

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/location/${id}`)
			.then((res) => res.json())
			.then((json) => setLocation(json));
	}, [id]);

	if (location) {
		residentComp = <Residents residentsUrl={location.residents} />;
	}

	return (
		location && (
			<div className='location-info'>
				<h1>Location</h1>
				<p>{location.name}</p>
				<p>Type: {location.type}</p>
				<p>Dimension: {location.dimension}</p>
				{residentComp}
			</div>
		)
	);
};

export default Location;
