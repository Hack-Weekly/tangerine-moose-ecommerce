import { useState } from "react";
import type { NextPage } from "next";

import FilterGroup from "~/components/FilterGroup";
import ProductList from "~/components/ProductList";
import { coffeeProducts } from "~/data/data";

const CoffeePage: NextPage = () => {
  const filters = ["blend", "single origin", "decaf"];
  const [filter, setFilter] = useState<string[]>([]);
  const filteredResult = coffeeProducts.filter(({ tags }) => filter.every((filter) => tags.includes(filter)));

  return (
    <>
      <FilterGroup filters={filters} onChange={setFilter} />
      <ProductList productList={filteredResult} />
    </>
  );
};

export default CoffeePage;
