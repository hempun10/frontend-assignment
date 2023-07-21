import getProducts from "@/actions/get-products";
import { Billboard, Container, ProductList } from "@/components/export";
import React from "react";
// This constant 'revalidate' is set to 0 and is likely used to control the revalidation behavior of data fetching.
export const revalidate = 0;
const billboardUrl = "/billboard-1.png";

const HomePage = async () => {
  const products = await getProducts(10);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard imageUrl={billboardUrl} text="Explore the trends" />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
