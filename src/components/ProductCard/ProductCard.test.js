import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductCard from "./ProductCard";

const exampleProduct = {
  name: "Test Name",
  brand: "Test brand",
  img:
    "https://cdn.shopify.com/s/files/1/2111/1121/products/Compile_Bookends_Beige_695x695.jpg?v=1569030646",
  price: 50.0,
  isOnSale: true,
  salePercentage: 30,
};

describe("ProductCard", () => {
  test("Render ProductCard", () => {
    const { getByTestId, getAllByTestId } = render(
      <ProductCard product={exampleProduct} />
    );
    const productImg = getByTestId("product_img");
    expect(productImg).toBeInTheDocument();
    expect(getByTestId("product_name")).toBeInTheDocument();
    expect(getByTestId("saleTag_test")).toBeInTheDocument();
  });
});
