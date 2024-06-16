import React from "react";

const ProductReviewList = ({ params }: { params: Record<string, string> }) => {
  return (
    <div>
      <h1>Product Reviews for {params.productId}</h1>
      <ul>
        <li>Product Review 1</li>
        <li>Product Review 2</li>
        <li>Product Review 3</li>
      </ul>
    </div>
  );
};

export default ProductReviewList;
