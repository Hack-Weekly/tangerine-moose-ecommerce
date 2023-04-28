import type { NextPage } from "next";

import { ProductList } from "~/components/ProductList";
import { teaProducts } from "~/data/data";

const Tea: NextPage = () => {
  return (
    <>
      <ProductList products={teaProducts} />;
    </>
  );
};

export default Tea;
