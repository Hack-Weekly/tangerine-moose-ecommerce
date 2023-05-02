import { useState } from "react";
import { useRouter } from "next/router";
import { AbsoluteCenter, Box, Container, Grid, GridItem, Spinner } from "@chakra-ui/react";

import FilterGroup from "~/components/FilterGroup";
import ProductList from "~/components/ProductList";
import { SortGroup } from "~/components/SortGroup";
import { filters, products } from "~/data/data";
import useFilter from "~/hooks/useFilter";
import type { Product } from "~/types/product";

const ProductTypePage = () => {
  const { query } = useRouter();
  const productType = query.type as "coffee" | "tea" | "equipment";
  const [productList, setProductList] = useState<Product[]>(products[productType]);
  const [setFilter, setSortOption] = useFilter(products[productType], setProductList);

  return productType === "coffee" ? (
    <Grid
      templateAreas={`"filters filters"
                      "products sort"`}
      gridTemplateRows={"fit-content fit-content"}
      gridTemplateColumns={"fit-content fit-content"}
      gap="1"
    >
      <GridItem area={"filters"}>
        <FilterGroup filters={filters[productType]} onChange={setFilter} />
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
  ) : (
    <Container minH={"calc(100vh - 98px)"}>
      <AbsoluteCenter>
        <Spinner />
      </AbsoluteCenter>
    </Container>
  );
};

export default ProductTypePage;
