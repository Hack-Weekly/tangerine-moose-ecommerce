import { useRouter } from "next/router";
import { Progress } from "@chakra-ui/react";

import CategoryPage from "~/components/CategoryPage";
import Empty from "~/components/Empty";
import { productTypes, type ProductType } from "~/types/product";

const getProductType = (input: string): ProductType | undefined => {
  const productType = productTypes.find((validType) => validType === input);
  if (productType) return productType;
};

const ProductTypePage = () => {
  const router = useRouter();
  const product = router.query.type as ProductType;
  if (!product) return <Progress size="xs" isIndeterminate colorScheme={"primary"} />;

  return getProductType(product) ? <CategoryPage product={product} /> : <Empty />;
};

export default ProductTypePage;
