import { useEffect, useState } from "react";
import { Box, Flex, Grid, GridItem, Wrap, WrapItem } from "@chakra-ui/react";

import Empty from "~/components/Empty";
import ProductCard from "~/components/ProductCard";
import { filters, products } from "~/data/data";
import useFilter from "~/hooks/useFilter";
import type { Product, ProductType } from "~/types/product";
import FilterGroup from "./FilterGroup";
import { SortGroup } from "./SortGroup";

const ProductList = ({ product }: { product: ProductType }) => {
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
        <Flex justifyContent={"center"}>
          {productList && productList.length ? (
            <Wrap justify="center">
              {productList.map((product) => (
                <WrapItem key={product.id}>
                  <ProductCard product={product} />
                </WrapItem>
              ))}
            </Wrap>
          ) : (
            <Empty />
          )}
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default ProductList;
