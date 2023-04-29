import {
  Flex,
  Image,
  Menu,
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
} from "@chakra-ui/react";

import type { Option, Product, Variant } from "~/types/product";
import { ActionButton, IconOutlineButton } from "./Button";
import Dropdown from "./Dropdown";

type ProductModalProps = {
  product: Product;
  isOpen: boolean;
  onAdd: () => void;
  onClose: () => void;
};

const ProductModal = ({ product, isOpen, onAdd, onClose }: ProductModalProps) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>(() => {
    return product.variants[0];
  });

  const selectVariant = (value: string, selectedOption: Option) => {
    setSelectedVariant((prevState) => {
      if (prevState) {
        const newOptions = prevState.options.map((option) => {
          if (option.name === selectedOption.name) {
            return {
              ...option,
              value,
            };
          }
          return option;
        });
        return product.variants.find((variant) => {
          return variant.options.every((option) => {
            return newOptions.some((newOption) => {
              return newOption.name === option.name && newOption.value === option.value;
            });
          });
        });
      }

      return prevState;
    });
  };

  const [quantity, setQuantity] = useState(1);
  const decrement = () => setQuantity((prevQuantity) => prevQuantity - 1);
  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);

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
      <ModalBody fontFamily={"space_grotesk"}>
        <Stack direction={["column", "row"]}>
            <Image src={product.image_url} alt={product.name} boxSize={"200px"} alignSelf={"center"} />
            <Flex flexDir={"column"} gap={4}>
              <Text fontWeight={"bold"} fontSize="xl">
                {product.name}
              </Text>
              <Text>{product.primary_tag.toUpperCase()}</Text>
              <Text>{product.description}</Text>
              {selectedVariant && (
                <Text fontWeight={"bold"} fontSize="xl">
                  {new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currency: "USD",
                  }).format((selectedVariant.price * quantity) / 100)}
                </Text>
              )}
              {product.options.map((option) => (
                <Menu matchWidth key={option.name}>
                  <Dropdown
                    label={option.name}
                    value={
                      selectedVariant?.options.find((selectedOption) => selectedOption.name === option.name)?.value ??
                      ""
                    }
                  />
                  <MenuList borderRadius={0} borderWidth={1} borderColor={"primary.500"}>
                    {option.values.map((value) => (
                      <MenuItem key={value} onClick={() => selectVariant(value, option)}>
                        {value}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              ))}
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
                <ActionButton
                  onClick={() => {
                    onAdd();
                    onClose();
                  }}
                  square
                  leftIcon={<AddIcon />}
                  size={"md"}
                  px={8}
                >
                  Add to Cart
                </ActionButton>
              </div>
            </Flex>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
