import type { NextPage } from "next";

import { ProductList } from "~/components/ProductList";
import { coffeeProducts } from "~/data/data";

const CoffeePage: NextPage = () => {
  return (
    <>
      <ProductList products={coffeeProducts} />;
    </>
  );
};

export default CoffeePage;
