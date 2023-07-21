"use client";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import {
  Container,
  ImagePreview,
  Info,
  ProductList,
} from "@/components/export";
import { Product } from "@/types";
import React, { useEffect, useState } from "react";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: number;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [suggestedProduct, setSuggestedProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProduct(params.productId);
        setProduct(productData);

        const getProductsdata = await getProducts(10);
        const filteredProducts = getProductsdata.filter(
          (item) => item.category === productData.category
        );
        setSuggestedProduct(filteredProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.productId]);

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <ImagePreview image={product.image} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProduct} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
