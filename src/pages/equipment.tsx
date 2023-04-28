import type { NextPage } from "next";
import { Center, SimpleGrid } from "@chakra-ui/react";

import ProductCard from "~/components/ProductCard";
import { equipmentProducts } from "~/utils/data";

const EquipmentPage: NextPage = () => {
  return (
    <>
      <SimpleGrid alignContent={"center"} spacing={4} columns={[1, null, 2, 3]}>
        {equipmentProducts.map((product) => (
          <Center key={product.id}>
            <ProductCard product={product} />
          </Center>
        ))}
      </SimpleGrid>
    </>
  );
};

export default EquipmentPage;
