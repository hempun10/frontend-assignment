import { Product } from "@/types";

const URL = `https://fakestoreapi.com/products`;

const getProduct = async (id: number): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getProduct;
