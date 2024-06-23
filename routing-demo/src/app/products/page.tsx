import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Products ",
};

const ProductList = () => {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <h1>Product List</h1>
      <ul>
        {[1, 2, 3].map((id) => (
          <li key={id}>
            <Link href={`products/${id}`} replace={id === 3}>
              Product {id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
