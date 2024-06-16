import { notFound } from "next/navigation";
import React from "react";

const ProductReview = ({ params }: { params: Record<string, string> }) => {
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
