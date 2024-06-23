import { Metadata } from "next";
import React, { FC } from "react";

interface IProductDetailsProps {
  params: {
    productId: string;
  };
}

export const generateMetadata = async ({
  params,
}: IProductDetailsProps): Promise<Metadata> => {
  const title = await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 1000)
  );
  return {
    title: `Product ${title}`,
  };
};

const ProductDetails: FC<IProductDetailsProps> = ({ params }) => {
  return <h1>Product Details {params.productId}</h1>;
};

export default ProductDetails;
