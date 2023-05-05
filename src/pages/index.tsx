import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useDisclosure } from "@chakra-ui/react";

import { CartDrawer } from "~/components/CartDrawer";
import OrderModal from "~/components/OrderModal";
import ProductList from "~/components/ProductList";
import { allProducts } from "~/data/data";

const Home: NextPage = () => {
  const { query } = useRouter();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();

  return (
    <>
      <ProductList productList={allProducts} />
      <OrderModal query={query} onDrawerOpen={onDrawerOpen} />
      <CartDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
    </>
  );
};

export default Home;
