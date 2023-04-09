import React from "react";
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="header">
			<h1 className="logo">HEALFIT</h1>
			<nav>
				<ul>
					<Link to='/'><li>Home</li></Link>
					<Link to='/calculator'><li>Calculator</li></Link>
				</ul>
			</nav>
		</div>
	);
}

export default Header;