"use client";
import getProducts from "@/actions/get-products";
import { Container } from "@/components/export";
import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import React, { useState, useEffect, ChangeEvent } from "react";
import toast from "react-hot-toast";

const ProductSearch: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsdata = await getProducts(15);
      setProducts(productsdata);
    } catch (error) {
      toast.error("Someting went wrong");
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    filterProducts();
  }, [searchTerm, products]);

  const filterProducts = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          {filteredProducts.map((product) => (
            <ProductCard data={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductSearch;
