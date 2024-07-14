import React from "react";

const page = () => {
  console.log("About Server Component");

  return <h1>About {new Date().toLocaleTimeString()}</h1>;
};

export default page;
