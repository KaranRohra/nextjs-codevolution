import Link from "next/link";
import React from "react";

function F4() {
  return (
    <div>
      <h1>F4 Page</h1>
      <Link href="/f1/f3">F3</Link> <br />
      <Link href="/about">About</Link>
    </div>
  );
}

export default F4;
