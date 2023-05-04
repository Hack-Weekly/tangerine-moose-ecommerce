import { useState } from "react";
import type { NextPage } from "next";

import FilterGroup from "~/components/FilterGroup";
import ProductList from "~/components/ProductList";
import { teaProducts } from "~/data/data";

const Tea: NextPage = () => {
  const filters = ["loose leaf", "tea bags", "black tea", "green tea"];
  const [filter, setFilter] = useState<string[]>([]);
  const filteredResult = teaProducts.filter(({ tags }) => filter.every((filter) => tags.includes(filter)));

  return (
    <>
      <FilterGroup filters={filters} onChange={setFilter} />
      <ProductList productList={filteredResult} />
    </>
  );
};

export default Tea;
