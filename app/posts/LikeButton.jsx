"use client";

import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "me gusta" : "normal"}
    </button>
  );
};

export default LikeButton;
