import React from "react";
import LikeButton from "./LikeButton";
import Link from "next/link";

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
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        {post.title}
        <p>{post.body}</p>
        <LikeButton />
      </Link>
    </article>
  ));
};

export default ListOfPost;
