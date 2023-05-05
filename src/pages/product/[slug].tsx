import { useState } from "react";
import { useRouter } from "next/router";
import { Container, Flex, Image, Progress, Stack, Text } from "@chakra-ui/react";

import Empty from "~/components/Empty";
import ProductContent from "~/components/ProductContent";
import { allProducts } from "~/data/data";

const ProductPage = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState(true);
  const product = allProducts.find((result) => result.slug === query.slug);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  if (loading) return <Progress size="xs" isIndeterminate colorScheme={"primary"} />;

  return (
    <Container maxW="4xl" mt={[null, "16"]}>
      {product ? (
        <Stack direction={["column", "row"]} gap={"16"}>
          <Image src={product.image_url} alt={product.name} boxSize={"50%"} alignSelf={"center"} />
          <Flex flexDir={"column"} gap={4}>
            <Text fontWeight={"bold"} fontSize="xl">
              {product.name}
            </Text>
            <Text>{product.primary_tag.toUpperCase()}</Text>
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
