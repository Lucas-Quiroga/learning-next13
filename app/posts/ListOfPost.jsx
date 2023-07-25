import React from "react";
import LikeButton from "./LikeButton";

const fetchPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 10,
    },
  }).then((res) => res.json());
};

const ListOfPost = async () => {
  const posts = await fetchPost();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      {post.title}
      <p>{post.body}</p>
      <LikeButton />
    </article>
  ));
};

export default ListOfPost;
