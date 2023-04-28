import { Flex, SimpleGrid } from "@chakra-ui/react";

import Empty from "~/components/Empty";
import ProductCard from "~/components/ProductCard";
import type { Coffee, Equipment, Tea } from "./types/product";

const ProductList = ({ productList }: { productList: (Coffee | Tea | Equipment)[] }) => (
  <Flex justifyContent={"center"}>
    {productList.length ? (
      <SimpleGrid alignContent={"center"} spacing={4} columns={[1, null, 2, 3]}>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    ) : (
      <Empty />
    )}
  </Flex>
);

export default ProductList;
