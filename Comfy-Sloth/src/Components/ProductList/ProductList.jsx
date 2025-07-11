import React from "react";
import { useFilterContext } from "../../Context/FillterContext/fillter_context";
import GridView from "../GridView/GridView";
import ListView from "../ListView/ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>ProductList</GridView>;
};

export default ProductList;
