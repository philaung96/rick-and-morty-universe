import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav>
				<Link to='/'>
					<img src='../../Media/logo.png' alt='logo' />
				</Link>
				<Link to='/locations'>
					<h1>Locations</h1>
				</Link>
				<Link to='/Characters'>
					<h1>Characters</h1>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
