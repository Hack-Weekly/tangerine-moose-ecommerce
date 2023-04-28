import type { NextPage } from "next";
import { Center, SimpleGrid } from "@chakra-ui/react";

import ProductCard from "~/components/ProductCard";
import { testProducts } from "~/utils/data";

const Coffee: NextPage = () => {
  return (
    <>
      <SimpleGrid alignContent={"center"} spacing={4} columns={[1, null, 2, 3]}>
        {testProducts.map((product) => (
          <Center key={product.id}>
            <ProductCard product={product} />
          </Center>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Coffee;
