import './Residents.css';
import { useEffect, useState } from 'react';
import Character from '../Components/Character/Character';

const Residents = (props) => {
	const [residents, setResidents] = useState([]);
	let residentsArr = [];
	let residentJsx = [];

	useEffect(() => {
		let residentCount = 0;
		props.residentsUrl.every((resident) => {
			residentCount++;
			fetch(resident)
				.then((res) => res.json())
				.then((json) => residentsArr.push(json));

			if (residentCount === 6) return false;
			return true;
		});
		setResidents(residentsArr);
	}, [props.residentsUrl]);

	residents &&
		(residentJsx = residents.map((resident) => (
			<Character character={resident} key={resident.name} />
		)));
	console.log('jsx', residentJsx);

	return (
		<>
			<h3>Residents : {props.residentsUrl.length}</h3>
			<div id='residents'>{residentJsx}</div>
		</>
	);
};

export default Residents;