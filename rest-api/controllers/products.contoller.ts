import { Product } from "../types.ts";

let products: Product[] = [
  { id: 1, name: "product1", desc: "this is a product", price: 20 },
  { id: 2, name: "product2", desc: "this is a product2", price: 50 },
  { id: 3, name: "product3", desc: "this is a product3", price: 100 },
];

// @desc GET all products
// @route GET /api

const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

export { getProducts };
