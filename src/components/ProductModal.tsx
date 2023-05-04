import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

import ProductContent from "~/components/ProductContent";
import type { Product } from "~/types/product";

type ProductModalProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={["full", "lg", "xl"]} blockScrollOnMount={false}>
      <ModalOverlay backdropFilter={"blur(2px)"} />
      <ModalContent p={"1rem"} borderRadius={0} borderWidth={1} borderColor={"primary.500"}>
        <ModalHeader p={4} />
        <ModalCloseButton
          variant={"outline"}
          colorScheme={"secondary"}
          border={"1px solid transparent"}
          borderRadius={0}
          _hover={{
            bg: "none",
            border: "1px solid black",
          }}
        />
        <ModalBody>
          <Stack direction={["column", "row"]}>
            <Image src={product.image_url} alt={product.name} boxSize={"200px"} alignSelf={"center"} />
            <Flex flexDir={"column"} gap={4}>
              <Text fontWeight={"bold"} fontSize="xl">
                {product.name}
              </Text>
              <Text>{product.primary_tag.toUpperCase()}</Text>
              <Text>{product.description}</Text>
              <ProductContent
                product={product}
                onAdd={() => {
                  onClose();
                }}
              />
            </Flex>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
