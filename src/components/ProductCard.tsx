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

import type { Product } from "~/types/product";
import { ActionButton } from "./Button";
import ProductModal from "./ProductModal";

type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card maxW="md" borderRadius={0} boxShadow={"none"}>
        <LinkBox height={"full"}>
          <CardBody
            bg={"gray.100"}
            height={"full"}
            transition={"all 0.2s ease-in-out"}
            _hover={{
              bgColor: product.color,
            }}
          >
            <Stack height={"full"} justifyContent={"space-between"}>
              <Flex height={"full"} flexDir={"column"} justifyContent={"center"}>
                <Image src={product.imageUrl} alt={product.name} />
              </Flex>
              <Stack bg={"secondary.500"} p={4}>
                <Flex justifyContent={"space-between"} fontWeight={"bold"} fontSize="xl" gap={4}>
                  <LinkOverlay href={`/product/${product.slug}`}>
                    <Text>{product.name}</Text>
                  </LinkOverlay>
                  <Text>
                    {new Intl.NumberFormat(undefined, {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                    }).format(product.basePrice)}
                  </Text>
                </Flex>
                <Text>{product.primaryTag.toUpperCase()}</Text>
              </Stack>
            </Stack>
          </CardBody>
        </LinkBox>
        <CardFooter px={0}>
          <ActionButton leftIcon={<AddIcon />} square p={6} onClick={onOpen} width="100%">
            Add to Cart
          </ActionButton>
        </CardFooter>
      </Card>
      <ProductModal product={product} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ProductCard;
