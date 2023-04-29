import { useState } from "react";
import type { NextPage } from "next";

import FilterGroup from "~/components/FilterGroup";
import ProductList from "~/components/ProductList";
import { equipmentProducts } from "~/data/data";

const EquipmentPage: NextPage = () => {
  const filters = ["brewer", "filters"];
  const [filter, setFilter] = useState<string[]>([]);
  const filteredResult = equipmentProducts.filter(({ tags }) => filter.every((filter) => tags.includes(filter)));

  return (
    <>
      <FilterGroup filters={filters} onChange={setFilter} />
      <ProductList productList={filteredResult} />
    </>
  );
};

export default EquipmentPage;
