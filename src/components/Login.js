import React, { useState } from 'react';


function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		console.log('Login:', {username, password });

		setUsername('');
		setPassword('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
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
		/>
		<button type="Submit">Login</button>
	</form>
	);
}

export default Login;
