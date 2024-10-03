import React from 'react';

function CommentList({ comments }) {
  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} style={{ margin: '5px 0', border: '1px solid #ccc', padding: '5px' }}>
            {comment}
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}

export default CommentList;

