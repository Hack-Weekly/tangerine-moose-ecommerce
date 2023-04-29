import { AddIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { useCart } from "~/contexts/cart";
import type { Product } from "~/types/product";
import { ActionButton } from "./Button";
import ProductModal from "./ProductModal";

type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addToCart } = useCart();

  return (
    <>
      <Card minW="sm" maxW="md" borderRadius={0} boxShadow={"none"}>
        <LinkBox>
          <CardBody
            bg={"gray.100"}
            transition={"all 0.2s ease-in-out"}
            _hover={{
              bgColor: product.color,
            }}
          >
            <Image src={product.image_url} alt={product.name} />
            <Stack bg={"secondary.500"} p={4}>
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
          <ActionButton leftIcon={<AddIcon />} square p={6} onClick={onOpen} width="100%">
            Add to Cart
          </ActionButton>
        </CardFooter>
      </Card>

      <ProductModal onAdd={() => addToCart(product)} product={product} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ProductCard;
