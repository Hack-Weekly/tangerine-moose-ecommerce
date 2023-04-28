import { useState } from "react";
import { AddIcon, ChevronDownIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { ActionButton, IconOutlineButton, OutlineButton } from "./Button";
import type { CoffeeProps } from "./types/product";

const ProductCard = ({ product }: { product: CoffeeProps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [price, setPrice] = useState(product.base_price);
  const [size, setSize] = useState(product.variants[0]?.variant.label);
  const [grind, setGrind] = useState(product.grindOptions[0]?.label);
  const [quantity, setQuantity] = useState(1);
  const selectVariant = (label: "340g" | "680g" | "2.3kg", price: number) => {
    setPrice(price);
    setSize(label);
  };
  const decrement = () => setQuantity((prevQuantity) => prevQuantity - 1);
  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);

  return (
    <>
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
          <ActionButton leftIcon={<AddIcon />} square p={6} onClick={onOpen} width="100%">
            Add to Cart
          </ActionButton>
        </CardFooter>
      </Card>
      {/* TODO: Modal component */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={["full", "lg", "xl"]} blockScrollOnMount={false}>
        <ModalOverlay backdropFilter={"blur(2px)"} />
        <ModalContent borderRadius={0} borderWidth={1} borderColor={"primary.500"} p={"1rem"}>
          <ModalHeader p={4} />
          <ModalCloseButton />
          <ModalBody fontFamily={"space_grotesk"}>
            <Stack direction={["column", "row"]}>
              <Image src={product.image_url} alt={product.name} boxSize={"200px"} alignSelf={"center"} />
              <Flex flexDir={"column"} gap={4}>
                <Text fontWeight={"bold"} fontSize="xl">
                  {product.name}
                </Text>
                <Text>{product.primary_tag.toUpperCase()}</Text>
                <Text>{product.description}</Text>
                <Text fontWeight={"bold"} fontSize="xl">{`$${(quantity * price) / 100}`}</Text>
                <Menu matchWidth>
                  <div>
                    <Text fontWeight={"bold"}>Size</Text>
                    <MenuButton
                      as={OutlineButton}
                      square
                      rightIcon={<ChevronDownIcon />}
                      width={"fit-content"}
                      _hover={{ boxShadow: "1px 1px black" }}
                    >
                      {size}
                    </MenuButton>
                  </div>
                  <MenuList borderRadius={0} borderWidth={1} borderColor={"primary.500"}>
                    {product.variants.map(({ variant, price }) => (
                      <MenuItem key={variant.weight} onClick={() => selectVariant(variant.label, price)}>
                        {variant.label}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                {/* TODO: Dropdown component */}
                <Menu matchWidth>
                  <div>
                    <Text fontWeight={"bold"}>Grind</Text>
                    <MenuButton
                      as={OutlineButton}
                      square
                      flat
                      rightIcon={<ChevronDownIcon />}
                      width={"fit-content"}
                      _hover={{ boxShadow: "1px 1px black" }}
                    >
                      {grind}
                    </MenuButton>
                  </div>
                  <MenuList borderRadius={0} borderWidth={1} borderColor={"primary.500"}>
                    {product.grindOptions.map(({ label, value }) => (
                      <MenuItem key={value} onClick={() => setGrind(label)}>
                        {label}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <HStack spacing={"2"}>
                  <IconOutlineButton
                    icon={<MinusIcon />}
                    aria-label={"Decrement"}
                    onClick={decrement}
                    isDisabled={quantity == 1}
                  />
                  <Text width={"6"} textAlign={"center"}>
                    {quantity}
                  </Text>
                  <IconOutlineButton icon={<AddIcon />} aria-label={"Increment"} onClick={increment} />
                </HStack>
                <div>
                  <ActionButton onClick={onClose} square leftIcon={<AddIcon />} size={"md"} px={8}>
                    Add to Cart
                  </ActionButton>
                </div>
              </Flex>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductCard;
