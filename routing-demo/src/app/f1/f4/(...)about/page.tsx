import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Codevolution",
};

const page = () => {
  return <h1>(...) Intercepted About Page</h1>;
};

export default page;
