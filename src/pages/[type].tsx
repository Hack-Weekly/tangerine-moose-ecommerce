import { useRouter } from "next/router";
import { Progress } from "@chakra-ui/react";

import CategoryPage from "~/components/CategoryPage";
import type { ProductType } from "~/types/product";

const ProductTypePage = () => {
  const {
    query: { type: product },
  } = useRouter();

  return product ? (
    <CategoryPage product={product as ProductType} />
  ) : (
    <Progress size="xs" isIndeterminate colorScheme={"primary"} />
  );
};

export default ProductTypePage;
