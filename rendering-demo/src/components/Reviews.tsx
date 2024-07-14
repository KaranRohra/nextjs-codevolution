import React from "react";

export const Reviews = async () => {
  await new Promise((r) => setTimeout(r, 2000));
  return <div>Reviews</div>;
};
