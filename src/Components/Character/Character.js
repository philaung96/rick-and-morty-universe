import './Character.css';

const Character = (props) => {
	let name = '';

	if (props.character) name = props.character.name;
	return (
		<div className='character'>
			<h3>{name}</h3>
			<img src={props.character.image} alt={name} />
		</div>
	);
};

export default Character;
