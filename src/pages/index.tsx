import { type GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useDisclosure } from "@chakra-ui/react";
import { type Prisma } from "@prisma/client";

import { CartDrawer } from "~/components/CartDrawer";
import OrderModal from "~/components/OrderModal";
import ProductList from "~/components/ProductList";
import prisma from "~/server/db";
import { type Product } from "~/types/product";

const Home = ({ products }: { products: Product[] }) => {
  const { query } = useRouter();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();

  return (
    <>
      <ProductList productList={products} />
      <OrderModal query={query} onDrawerOpen={onDrawerOpen} />
      <CartDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
    </>
  );
};

export default Home;

export const includeOptions = {
  include: {
    variants: true,
  },
};

export const getStaticProps: GetStaticProps = async () => {
  const dbProducts = await prisma.product.findMany(includeOptions);
  return {
    props: {
      products: dbProducts.map((product: Prisma.ProductGetPayload<typeof includeOptions>) => ({
        ...product,
        basePrice: product.basePrice.toNumber(),
        createdAt: product.createdAt.toISOString(),
        updatedAt: product.updatedAt.toISOString(),
        variants: product.variants.map((variant) => ({
          ...variant,
          price: variant.price.toNumber(),
        })),
      })),
    },
    revalidate: 10,
  };
};
