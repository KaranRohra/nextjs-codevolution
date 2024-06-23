import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Blog Page",
  },
};
const page = () => {
  return <h1>Blog Page</h1>;
};

export default page;
