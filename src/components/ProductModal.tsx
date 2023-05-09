import { Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text } from "@chakra-ui/react";

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
      <ModalOverlay />
      <ModalContent pt={8} px={4} pb={4} borderRadius={0} borderWidth={1} borderColor={"primary.500"}>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap={6} direction={["column", "row"]}>
            <Image src={product.imageUrl} alt={product.name} boxSize={"200px"} alignSelf={"center"} />
            <Flex flexDir={"column"} gap={4}>
              <Text fontWeight={"bold"} fontSize="xl">
                {product.name}
              </Text>
              <Text>{product.primaryTag.toUpperCase()}</Text>
              <Text>{product.description}</Text>
              <ProductContent
                product={product}
                onAdd={() => {
                  onClose();
                }}
              />
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
