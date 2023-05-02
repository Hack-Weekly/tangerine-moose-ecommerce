import { useState } from "react";
import type { NextPage } from "next";
import { Box, Grid, GridItem } from "@chakra-ui/react";

import FilterGroup from "~/components/FilterGroup";
import ProductList from "~/components/ProductList";
import { SortGroup } from "~/components/SortGroup";
import { coffeeProducts } from "~/data/data";
import useFilter from "~/hooks/useFilter";
import { type Product } from "~/types/product";

const CoffeePage: NextPage = () => {
  const filters = ["blend", "single origin", "decaf"];
  const [products, setProducts] = useState<Product[]>(coffeeProducts);
  const [setFilter, setSortOption] = useFilter(coffeeProducts, setProducts);

  return (
    <Grid
      templateAreas={`"filters filters"
                    "products sort"`}
      gridTemplateRows={"fit-content fit-content"}
      gridTemplateColumns={"fit-content fit-content"}
      gap="1"
    >
      <GridItem area={"filters"}>
        <FilterGroup filters={filters} onChange={setFilter} />
      </GridItem>
      <GridItem area={"sort"}>
        <Box h={"fit-content"} position={"sticky"} top={24}>
          <SortGroup onChange={setSortOption} />
        </Box>
      </GridItem>
      <GridItem area={"products"}>
        <ProductList productList={products} />
      </GridItem>
    </Grid>
  );
};

export default CoffeePage;
