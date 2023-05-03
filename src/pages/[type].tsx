import { useRouter } from "next/router";
import { AbsoluteCenter, Container, Spinner } from "@chakra-ui/react";

import CategoryPage from "~/components/CategoryPage";
import type { ProductType } from "~/types/product";

const ProductTypePage = () => {
  const {
    query: { type: product },
  } = useRouter();

  return product ? (
    <CategoryPage product={product as ProductType} />
  ) : (
    <Container>
      <AbsoluteCenter>
        <Spinner />
      </AbsoluteCenter>
    </Container>
  );
};

export default ProductTypePage;
