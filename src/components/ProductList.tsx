import { Flex, SimpleGrid } from "@chakra-ui/react";

import Empty from "~/components/Empty";
import ProductCard from "~/components/ProductCard";
import type { Coffee, Equipment, Tea } from "~/types/product";

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

// import { Center, SimpleGrid } from "@chakra-ui/react";

// import ProductCard from "~/components/ProductCard";
// import { type Coffee, type Equipment, type Tea } from "~/types/product";

// type ProductListProps = {
//   products: (Coffee | Tea | Equipment)[];
// };
// export const ProductList = ({ products }: ProductListProps) => {
//   return (
//     <SimpleGrid alignContent={"center"} spacing={4} columns={[1, null, 2, 3]}>
//       {products.map((product) => (
//         <Center key={product.id}>
//           <ProductCard product={product} />
//         </Center>
//       ))}
//     </SimpleGrid>
//   );
// };
