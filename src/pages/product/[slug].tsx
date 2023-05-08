import { type GetStaticPaths, type GetStaticProps } from "next";
import { Container, Flex, Image, Stack, Text } from "@chakra-ui/react";

import Empty from "~/components/Empty";
import ProductContent from "~/components/ProductContent";
import prisma from "~/server/db";
import { type Product } from "~/types/product";
import { includeOptions } from "..";

const ProductPage = ({ product }: { product: Product }) => {
  return (
    <Container maxW="4xl" mt={[null, "16"]}>
      {product ? (
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
      ) : (
        <Empty />
      )}
    </Container>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const dbProducts = await prisma.product.findMany({
    select: {
      slug: true,
    },
  });

  const paths = dbProducts.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const dbProduct = await prisma.product.findFirstOrThrow({
    where: context.params,
    ...includeOptions,
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
    revalidate: 10,
  };
};
