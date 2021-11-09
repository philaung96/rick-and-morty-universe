import './Episode.css';

const Episode = (props) => {
	return (
		<div className='episode'>
			<h3>{props.episodeData.name}</h3>
		</div>
	);
};

export default Episode;
