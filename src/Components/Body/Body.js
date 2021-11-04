import './Body.css';
import { Route } from 'react-router';
import Home from '../Home/Home';
import Locations from '../Locations/Locations';
import Location from '../Location/Location';
import MrMeeseeks from '../MrMeeseeks/MrMeeseeks';

const Body = () => {
	return (
		<main>
			<Route path='/' exact component={Home} />
			<div id='location-grid'>
				<aside>
					<Route path='/locations/:id' component={Location} />
				</aside>
				<section>
					<Route path='/locations' component={Locations} />
				</section>
			</div>
			<MrMeeseeks />
		</main>
	);
};

export default Body;
