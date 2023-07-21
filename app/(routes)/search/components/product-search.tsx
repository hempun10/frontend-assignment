"use client";
import getProducts from "@/actions/get-products";
import { Container } from "@/components/export";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import { SearchIcon } from "lucide-react";
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
      const productsdata = await getProducts(30);
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
          <div className=" mb-4 border  border-black p-4 flex justify-between items-center rounded-lg">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={handleSearch}
              className="focus:outline-none w-full"
            />
            <SearchIcon size={25} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {filteredProducts.map((product) => (
              <ProductCard data={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && <NoResults />}
        </div>
      </Container>
    </div>
  );
};

export default ProductSearch;
