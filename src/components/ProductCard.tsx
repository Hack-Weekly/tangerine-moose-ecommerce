import { AddIcon } from "@chakra-ui/icons";
import { Card, CardBody, CardFooter, Flex, Image, LinkBox, LinkOverlay, Stack, Text } from "@chakra-ui/react";

import { ActionButton } from "./Button";
import type { CoffeeProps } from "./types/product";

const ProductCard = ({ product }: { product: CoffeeProps }) => (
  <Card maxW="md" borderRadius={0} boxShadow={"none"}>
    <LinkBox>
      <CardBody
        bg={"gray.100"}
        transition={"all 0.2s ease-in-out"}
        _hover={{
          bgColor: product.color,
        }}
      >
        <Image src={product.image_url} alt={product.name} />
        <Stack>
          <Flex alignItems={"center"} justifyContent={"space-between"} fontWeight={"bold"} fontSize="xl">
            <LinkOverlay href={`/${product.type}/${product.slug}`}>
              <Text>{product.name}</Text>
            </LinkOverlay>
            <Text>{`$${product.base_price / 100}`}</Text>
          </Flex>
          <Text>{product.primary_tag.toUpperCase()}</Text>
        </Stack>
      </CardBody>
    </LinkBox>
    <CardFooter px={0}>
      <ActionButton icon={<AddIcon />} full square p={6} onClick={() => console.log("adding to cart")}>
        Add to Cart
      </ActionButton>
    </CardFooter>
  </Card>
);

export default ProductCard;
