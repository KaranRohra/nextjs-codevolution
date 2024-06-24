import { notFound } from "next/navigation";
import React from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ProductReview = ({ params }: { params: Record<string, string> }) => {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }

  if (parseInt(params.reviewId) > 1000) {
    return notFound();
  }

  return (
    <div>
      <h1>
        Review {params.reviewId} for Product {params.productId}
      </h1>
    </div>
  );
};

export default ProductReview;
