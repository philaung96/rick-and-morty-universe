import './Body.css';
import { Route } from 'react-router';
import Home from '../Home/Home';
import Locations from '../Locations/Locations';
import Location from '../Location/Location';
import MrMeeseeks from '../MrMeeseeks/MrMeeseeks';

const Body = () => {
	return (
		<main>
			<Route path='/rick-and-morty-universe' exact component={Home} />
			<div id='location-grid'>
				<aside>
					<Route
						path='/rick-and-morty-universe/locations/:id'
						component={Location}
					/>
				</aside>
				<section>
					<Route
						path='/rick-and-morty-universe/locations'
						component={Locations}
					/>
				</section>
			</div>
			<MrMeeseeks />
		</main>
	);
};

export default Body;
