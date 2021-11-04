import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav>
				<Link to='/rick-and-morty-universe'>
					<div id='home-nav'></div>
				</Link>
				<div>
					<Link to='/rick-and-morty-universe/locations'>
						<h1>Locations</h1>
					</Link>
					<Link to='/rick-and-morty-universe/characters'>
						<h1>Characters</h1>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
