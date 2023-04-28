import type { NextPage } from "next";
import { Center, SimpleGrid } from "@chakra-ui/react";

import ProductCard from "~/components/ProductCard";
import type { Coffee } from "~/components/types/product";
import { coffeeProducts } from "~/utils/data";

const CoffeePage: NextPage = () => {
  return (
    <>
      <SimpleGrid alignContent={"center"} spacing={4} columns={[1, null, 2, 3]}>
        {coffeeProducts.map((product: Coffee) => (
          <Center key={product.id}>
            <ProductCard product={product} />
          </Center>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CoffeePage;
