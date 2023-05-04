import { useEffect, useState } from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";

import { filters, products } from "~/data/data";
import useFilter from "~/hooks/useFilter";
import type { Product, ProductType } from "~/types/product";
import FilterGroup from "./FilterGroup";
import ProductList from "./ProductList";
import { SortGroup } from "./SortGroup";

const CategoryPage = ({ product }: { product: ProductType }) => {
  const [productList, setProductList] = useState<Product[]>(products[product]);
  const [setFilter, setSortOption] = useFilter(products[product], setProductList);

  useEffect(() => {
    setProductList(products[product]);
  }, [product]);

  return (
    <Stack>
      <FilterGroup filters={filters[product]} onChange={setFilter} />
      <Flex justifyContent={"center"}>
        <ProductList productList={productList} />
        <Box h={"fit-content"} position={"sticky"} top={24} px={2}>
          <SortGroup onChange={setSortOption} />
        </Box>
      </Flex>
    </Stack>
  );
};

export default CategoryPage;
