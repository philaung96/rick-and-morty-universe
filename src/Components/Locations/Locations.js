import './Locations.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Locations = () => {
	const [locations, setLocations] = useState([]);
	const inputName = useRef(null);

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

	const handleOnSubmit = (e) => {
		e.preventDefault();
		makeApiCall(
			`https://rickandmortyapi.com/api/location/?name=${inputName.current.value}`
		);
		inputName.current.value = '';
	};

	return (
		<>
			<h1>Explore Different Locations</h1>
			<form onSubmit={handleOnSubmit}>
				<input ref={inputName} type='text' placeholder='EARTH (D-99)'></input>
				<button type='submit'>Search</button>
			</form>
			<div id='locations'>{locationJsx}</div>
			<div id='locations-buttons'>
				{locations.info && locations.info.prev && (
					<button onClick={handleOnClickPrev}>&lt; prev</button>
				)}
				{locations.info && locations.info.next && (
					<button onClick={handleOnClickNext}>next &gt;</button>
				)}
			</div>
		</>
	);
};

export default Locations;
