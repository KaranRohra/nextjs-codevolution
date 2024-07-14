import React from "react";

const Product = async () => {
  await new Promise((r) => setTimeout(r, 5000));
  return <div>Product</div>;
};

export default Product;
