import React from "react";
import Post from "./Post";

function Posts(props) {
  return props.posts.map(({ id, post }) => (
    <Post
      key={id}
      postId={id}
      username={post.username}
      caption={post.caption}
      imageUrl={post.imageUrl}
      user={props.user}
    />
  ));
}

export default Posts;
