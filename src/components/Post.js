import React, { useState } from 'react';
import Comment from './Comment';
import CommentList from './CommentList';

function Post({ onAddImage }) {
  const [imageFile, setImageFile] = useState(null);
  const [comments, setComments] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setImageFile(fileURL);
    }
  };

  const handleAddComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]); // Use the correct variable here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageFile) {
      onAddImage(imageFile);
      setImageFile(null);
      setComments([]); // Clear comments if necessary
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Post an Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        {imageFile && <img src={imageFile} alt="Preview" style={{ width: '100px', margin: '10px 0' }} />}
        <button type="submit">Post Image</button>
      </form>

      {/* Comment Section */}
      <Comment onAddComment={handleAddComment} /> {/* Correct case for function name */}
      <CommentList comments={comments} />
    </div>
  );
}

export default Post;

