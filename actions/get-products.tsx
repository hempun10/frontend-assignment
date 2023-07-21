import { Product } from "@/types";
type ProductData = Product[];
const getProducts = async (limit: number): Promise<ProductData> => {
  try {
    const URL = `https://fakestoreapi.com/products?limit=${limit}`;

    const res = await fetch(URL);
    const data: ProductData = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default getProducts;
