import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={"/blog"}>Blog</Link> <br />
      <Link href={"/products"}>Products</Link>
    </div>
  );
};

export default page;
