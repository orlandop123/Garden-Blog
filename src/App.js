import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './components/Home';
import Post from './components/Post';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
	const [images, setImages] = useState([]);
	const addImage = (image) => {
		setImages((prevImages) => [...prevImages, image]);
		};

return (
	<Router>
		<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/post" element={<Post onAddImage={addImage} />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/profile" element={<Profile images = {images} />} />
		

		</Routes>
	</Router>
	);
};

export default App;
