import { useRouter } from "next/router";
import { Progress } from "@chakra-ui/react";

import CategoryPage from "~/components/CategoryPage";
import Empty from "~/components/Empty";
import { ProductTypes, type ProductType } from "~/types/product";

const isProductType = (input: string): boolean => ProductTypes.find((validType) => validType === input) !== undefined;

const ProductTypePage = () => {
  const router = useRouter();
  const product = router.query.type as ProductType;
  if (!product) return <Progress size="xs" isIndeterminate colorScheme={"primary"} />;

  return isProductType(product) ? <CategoryPage product={product} /> : <Empty />;
};

export default ProductTypePage;
