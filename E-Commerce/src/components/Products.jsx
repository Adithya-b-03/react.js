import React from "react";
import { Outlet, useParams } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Products;
