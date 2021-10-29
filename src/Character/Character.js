import './Character.css';

const Character = (props) => {
	let name = '';
    
	if (props.character) name = props.character.name;
	return (
		<div className='character'>
			<p>{name}</p>
			<img src={props.character.image} alt={name} />
		</div>
	);
};

export default Character;
