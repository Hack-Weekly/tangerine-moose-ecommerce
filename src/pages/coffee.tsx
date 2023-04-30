import { useState } from "react";
import type { NextPage } from "next";
import { Box, Flex, Grid, GridItem, Stack } from "@chakra-ui/react";

import FilterGroup from "~/components/FilterGroup";
import ProductList from "~/components/ProductList";
import { SortGroup, params, type SortParam } from "~/components/SortGroup";
import { coffeeProducts } from "~/data/data";

const findFn = (arr: SortParam[], key: string) => arr.find((obj: SortParam) => obj.value === key)?.fn;

const CoffeePage: NextPage = () => {
  const filters = ["blend", "single origin", "decaf"];
  const [filter, setFilter] = useState<string[]>([]);
  const filteredResult = coffeeProducts.filter(({ tags }) => filter.every((filter) => tags.includes(filter)));

  const [sort, setSort] = useState<string | number>("");
  const isString = (element: string | number): element is string => typeof element === "string";
  const sortFn = sort && isString(sort) && findFn(params, sort);
  const sortedResult = sortFn && sort ? filteredResult.sort(sortFn) : filteredResult;

  return (
    <>
      <Grid templateColumns={"repeat(18,1fr)"} gap={4}>
        <GridItem colSpan={17}>
          <Flex flexDir={"column"} alignContent={"flex-start"} gap={4} mt={2}>
            <Stack direction={["column", "row"]}>
              <FilterGroup filters={filters} onChange={setFilter} />
            </Stack>
            <ProductList productList={sortedResult} />
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <Box position={"fixed"} width={"fit-content"} p={1}>
            <SortGroup handleChange={setSort} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default CoffeePage;
