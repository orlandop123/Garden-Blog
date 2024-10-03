import React from 'react';

function Profile({ images }) {
	return (
		<div>
			<h2>Your Profile </h2>
			<h3> Posted Images </h3>
			<div className="image-gallery">
				{images.length > 0 ? (
					images.map((image, index) => (
						<img key={index} src={image} alt={`Posted ${index}` } />
		))
	) : (
		<p> No images posted </p>
		)}
			</div>
		</div>
	);
}

export default Profile;

