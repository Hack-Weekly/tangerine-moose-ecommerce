import type { ReactNode } from "react";
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

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  imageUrl: string;
  primaryTag: string;
  description: string;
  children: ReactNode;
};

const ProductModal = ({ isOpen, onClose, name, imageUrl, primaryTag, description, children }: ModalProps) => (
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
      <ModalBody fontFamily={"space_grotesk"}>
        <Stack direction={["column", "row"]}>
          <Image src={imageUrl} alt={name} boxSize={"200px"} alignSelf={"center"} />
          <Flex flexDir={"column"} gap={4}>
            <Text fontWeight={"bold"} fontSize="xl">
              {name}
            </Text>
            <Text>{primaryTag.toUpperCase()}</Text>
            <Text>{description}</Text>

            {children}
          </Flex>
        </Stack>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default ProductModal;
