import './Locations.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Locations = () => {
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/location')
			.then((res) => res.json())
			.then((json) => setLocations(json));
	}, []);

	let locationJsx = [];
	if (locations.results) {
		locationJsx = locations.results.map((location) => (
			<div className='location' key={location.id}>
				<Link to={'/locations/' + location.id}>
					<p>{location.name}</p>
				</Link>
			</div>
		));
	}

	return (
		<section>
			<h1>Locations</h1>
			<div id='locations'>{locationJsx}</div>
		</section>
	);
};

export default Locations;
