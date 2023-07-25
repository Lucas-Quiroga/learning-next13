import React from "react";

const page = ({ params }) => {
  const { id } = params;

  return <div>Soy posts {id}</div>;
};

export default page;
