import './Body.css';
import { Route } from 'react-router';
import Home from '../Home/Home';
import Locations from '../Locations/Locations';
import Location from '../Location/Location';

const Body = () => {
	return (
		<main>
			<Route path='/' exact component={Home} />
			<Route path='/locations/:id' component={Location} />
			<Route path='/locations' component={Locations} />
		</main>
	);
};

export default Body;
