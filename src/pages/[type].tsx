import { useRouter } from "next/router";
import { AbsoluteCenter, Container, Spinner } from "@chakra-ui/react";

import ProductList from "~/components/ProductList";
import type { ProductType } from "~/types/product";

const ProductTypePage = () => {
  const {
    query: { type: product },
  } = useRouter();

  return product ? (
    <ProductList product={product as ProductType} />
  ) : (
    <Container minH={"calc(100vh - 98px)"}>
      <AbsoluteCenter>
        <Spinner />
      </AbsoluteCenter>
    </Container>
  );
};

export default ProductTypePage;