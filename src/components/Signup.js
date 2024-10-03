/* eslint-disable */
import React, { useState } from 'react';
import './css/Form.css';

function Signup() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Signup:', { username, password });

		setUsername('');
		setPassword('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<h2>Signup</h2>
			<input
				type="text"
				placeholder="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
		required
	/>
	<input
		type="password"
		placeholder="Password"
		value={password}
		onChange={(e) => setPassword(e.target.value)}
		required
	/>
	<button type="submit"> Sign Up </button>
	</form>
	);
}

export default Signup;
