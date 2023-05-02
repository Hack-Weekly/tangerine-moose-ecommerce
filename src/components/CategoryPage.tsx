import { useEffect, useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";

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
    <Grid
      templateAreas={`"filters filters"
                      "products sort"`}
      gridTemplateRows={"fit-content fit-content"}
      gridTemplateColumns={"fit-content fit-content"}
      gap="1"
    >
      <GridItem area={"filters"}>
        <FilterGroup filters={filters[product]} onChange={setFilter} />
      </GridItem>
      <GridItem area={"sort"}>
        <Box h={"fit-content"} position={"sticky"} top={24}>
          <SortGroup onChange={setSortOption} />
        </Box>
      </GridItem>
      <GridItem area={"products"}>
        <ProductList productList={productList} />
      </GridItem>
    </Grid>
  );
};

export default CategoryPage;
