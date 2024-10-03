import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'; 
import logo from './assets/images/logo.png';

function Header() {
	return (
	<header className="header">
		<div className="logo-container">
			<Link to="/">
				<img src={logo} alt="logo" className="logo" />
			</Link>
		</div>	
		<nav>
				<ul className="nav-list">
					<li> <Link to="/"> Home </Link></li>
					<li> <Link to="/post"> Post </Link></li>

					<li> <Link to="/contact"> Contact </Link></li>
					<li> <Link to="/about"> About </Link></li>
					<li> <Link to="/login"> Login </Link></li>
					<li> <Link to="signup"> Signup </Link></li>
					<li> <Link to="/profile"> Profile </Link></li>

		</ul>
		</nav>

	</header>
	);
};

export default Header;

