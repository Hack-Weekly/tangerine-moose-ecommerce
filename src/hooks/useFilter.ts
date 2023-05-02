import { useEffect, useState } from "react";

import sortOptions from "~/data/sort";
import type { Product } from "~/types/product";

export default function useFilter(products: Product[], setProducts: (sortedItems: Product[]) => void) {
  const [filter, setFilter] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("");

  useEffect(() => {
    let sortedItems = [...products];

    sortedItems = filter.length
      ? products.filter(({ tags }) => filter.every((filterOption) => tags.includes(filterOption)))
      : sortedItems;

    const sortFn = sortOptions.find((obj) => obj.value === sortOption)?.fn;
    if (sortFn) sortedItems = sortedItems.sort(sortFn);

    setProducts(sortedItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, sortOption]);

  return [setFilter, setSortOption] as const;
}
