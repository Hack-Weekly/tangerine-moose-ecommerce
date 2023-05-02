import { Flex, Wrap, WrapItem } from "@chakra-ui/react";

import Empty from "~/components/Empty";
import ProductCard from "~/components/ProductCard";
import type { Product } from "~/types/product";

const ProductList = ({ productList }: { productList: Product[] }) => (
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
);

export default ProductList;
