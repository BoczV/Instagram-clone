import React from "react";
import Comment from "./Comment";
import "../Styles/Post.css";

function Comments(props) {
  return (
    <div className="post__comments">
      {props.comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}

export default Comments;
