import { cookies } from "next/headers";
import React from "react";

// Dynamic Rendering automatically enables when searchParams, cookies or headers are used in component.
const page = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);

  console.log("About Server Component");

  return <h1>About {new Date().toLocaleTimeString()}</h1>;
};

export default page;
