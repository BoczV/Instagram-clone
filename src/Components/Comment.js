import React from "react";

function Comment(props) {
  return (
    <p>
      <strong>{props.comment.username}: </strong>
      {props.comment.text}
    </p>
  );
}

export default Comment;
