import { useEffect, useState } from "react";
import { type GetStaticPaths, type GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Box, Flex, Progress, Stack } from "@chakra-ui/react";
import { type Prisma, type ProductType } from "@prisma/client";

import Empty from "~/components/Empty";
import FilterGroup from "~/components/FilterGroup";
import ProductList from "~/components/ProductList";
import { SortGroup } from "~/components/SortGroup";
import useFilter from "~/hooks/useFilter";
import prisma from "~/server/db";
import { type Product } from "~/types/product";
import { includeOptions } from ".";

const ProductTypePage = ({ products, productType }: { products: Product[]; productType: ProductType }) => {
  const router = useRouter();
  const [productList, setProductList] = useState<Product[]>(products);
  const [setFilter, setSortOption] = useFilter(products, setProductList);

  const product = router.query.type as ProductType;

  useEffect(() => {
    setProductList(products);
  }, [products]);

  if (!product) return <Progress size="xs" isIndeterminate colorScheme={"primary"} />;

  return product ? (
    <Stack>
      <FilterGroup productType={productType} onChange={setFilter} />
      <Flex justifyContent={"space-between"}>
        <Box flexGrow={1} justifyContent={"center"}>
          <ProductList productList={productList} />
        </Box>
        <Box h={"fit-content"} position={"sticky"} top={24} px={2}>
          <SortGroup onChange={setSortOption} />
        </Box>
      </Flex>
    </Stack>
  ) : (
    <Empty />
  );
};

export default ProductTypePage;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { type: "coffee" } }, { params: { type: "tea" } }, { params: { type: "equipment" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const dbProducts = await prisma.product.findMany({
    where: context.params,
    ...includeOptions,
  });
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
      productType: context.params?.type,
    },
    revalidate: 10,
  };
};
