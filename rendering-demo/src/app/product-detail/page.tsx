import Product from "@/components/Product";
import { Reviews } from "@/components/Reviews";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <h1>Product Details</h1>
      <Suspense fallback={<p>Loading Products</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Reviews</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
};

export default page;
