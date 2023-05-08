import { type GetStaticPaths, type GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Container, Flex, Image, Stack, Text } from "@chakra-ui/react";

import ProductContent from "~/components/ProductContent";
import prisma from "~/server/db";
import { type Product } from "~/types/product";
import { includeOptions } from "..";
import ProductSkeleton from "./skeleton";

const ProductPage = ({ product }: { product: Product }) => {
  const router = useRouter();

  return router.isFallback ? (
    <ProductSkeleton />
  ) : (
    <Container maxW="4xl" mt={[null, "16"]}>
      <Stack direction={["column", "row"]} gap={"16"}>
        <Image src={product.imageUrl} alt={product.name} boxSize={"50%"} alignSelf={"center"} />
        <Flex flexDir={"column"} gap={4}>
          <Text fontWeight={"bold"} fontSize="xl">
            {product.name}
          </Text>
          <Text>{product.primaryTag.toUpperCase()}</Text>
          <Text>{product.description}</Text>
          <ProductContent product={product} />
        </Flex>
      </Stack>
    </Container>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // this pre-renders all products now, but can be limited to just the most popular products
  // and everything else will render on-demand, showing the product skeleton first
  const dbProducts = await prisma.product.findMany({
    select: {
      slug: true,
    },
  });

  const paths = dbProducts.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const dbProduct = await prisma.product
    .findUniqueOrThrow({
      where: {
        slug: context.params?.slug as string,
      },
      ...includeOptions,
    })
    .catch()
    .finally(() => {
      return {
        notFound: true,
      };
    });

  return {
    props: {
      product: {
        ...dbProduct,
        basePrice: dbProduct.basePrice.toNumber(),
        createdAt: dbProduct.createdAt.toISOString(),
        updatedAt: dbProduct.updatedAt.toISOString(),
        variants: dbProduct.variants.map((variant) => ({
          ...variant,
          price: variant.price.toNumber(),
        })),
      },
    },
    revalidate: 60,
  };
};
