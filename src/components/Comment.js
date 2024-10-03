import React, { useState } from 'react';

function Comment ({ onAddComment }) {
	const [comment, setComment] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if(comment){
			onAddComment(comment);
			setComment('');
		}
	};


	return (
		<div> 
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Add a comment..."
					value={comment}
					onChange={(e) => setComment(e.target.value)}
		required
		/>
		<button type="submit"> Post Comment </button>
			</form>
		</div>
	);
}

export default Comment;
