import type { NextPage } from "next";
import { SimpleGrid } from "@chakra-ui/react";

import ProductCard from "~/components/ProductCard";
import { testProducts } from "~/utils/data";

const Coffee: NextPage = () => {
  return (
    <>
      <SimpleGrid alignContent={"center"} spacing={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        {testProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Coffee;
