import { Flex, Wrap } from "@chakra-ui/react";

import Empty from "~/components/Empty";
import ProductCard from "~/components/ProductCard";
import { type Product } from "~/types/product";

const ProductList = ({ productList }: { productList: Product[] }) => (
  <Flex justifyContent={"center"}>
    {productList && productList.length ? (
      <Wrap justify={"center"}>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Wrap>
    ) : (
      <Empty message={"sorry, we’re all out."} />
    )}
  </Flex>
);

export default ProductList;
