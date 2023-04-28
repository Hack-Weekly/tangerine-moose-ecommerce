import { Center, SimpleGrid } from "@chakra-ui/react";

import ProductCard from "~/components/ProductCard";
import { type Product } from "~/types/product";

// TODO: fix types
type ProductListProps = {
  products: Product[];
};
export const ProductList = ({ products }: ProductListProps) => {
  return (
    <SimpleGrid alignContent={"center"} spacing={4} columns={[1, null, 2, 3]}>
      {products.map((product) => (
        <Center key={product.id}>
          <ProductCard product={product} />
        </Center>
      ))}
    </SimpleGrid>
  );
};
