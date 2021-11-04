import './Locations.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Locations = () => {
	const [locations, setLocations] = useState([]);

	const makeApiCall = (url) => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setLocations(json));
	};

	useEffect(() => {
		makeApiCall('https://rickandmortyapi.com/api/location');
	}, []);

	let locationJsx = [];
	if (locations.results) {
		locationJsx = locations.results.map((location) => (
			<div className='location' key={location.id}>
				<Link to={'/rick-and-morty-universe/locations/' + location.id}>
					<p>{location.name.toUpperCase()}</p>
				</Link>
			</div>
		));
	}

	const handleOnClickPrev = () => {
		makeApiCall(locations.info.prev);
	};

	const handleOnClickNext = () => {
		makeApiCall(locations.info.next);
	};

	return (
		<section>
			<h1>Explore Different Locations</h1>
			<div id='locations'>{locationJsx}</div>
			<div>
				{locations.info && locations.info.prev && (
					<button onClick={handleOnClickPrev}>prev</button>
				)}
				{locations.info && locations.info.next && (
					<button onClick={handleOnClickNext}>next</button>
				)}
			</div>
		</section>
	);
};

export default Locations;
