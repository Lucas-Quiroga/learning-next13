import React from "react";

const layout = ({ children }) => {
  // El estado de los layout se mantienen
  return (
    <div>
      <h1>Layout de los posts</h1>
      {children}
    </div>
  );
};

export default layout;
