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
    <Container minH={"calc(100vh - 98px)"}>
      <AbsoluteCenter>
        <Spinner />
      </AbsoluteCenter>
    </Container>
  );
};

export default ProductTypePage;
