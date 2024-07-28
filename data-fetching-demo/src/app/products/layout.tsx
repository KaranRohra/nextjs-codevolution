import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const res = await fetch("http://localhost:3001/products");
  const products = await res.json();
  console.log(products);
  return <div>{children}</div>;
};

export default layout;
