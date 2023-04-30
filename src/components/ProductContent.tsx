import { useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { HStack, Menu, MenuItem, MenuList, Text } from "@chakra-ui/react";

import { ActionButton, IconOutlineButton } from "~/components/Button";
import Dropdown from "~/components/Dropdown";
import { useCart } from "~/contexts/cart";
import type { Option, Product, Variant } from "~/types/product";

type ContentProps = {
  product: Product;
  onAdd: () => void;
};

const ProductContent = ({ product, onAdd }: ContentProps) => {
  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>(() => {
    return product.variants[0];
  });
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

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
  const decrement = () => setQuantity((prevQuantity) => prevQuantity - 1);
  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);

  return (
    <>
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
            value={selectedVariant?.options.find((selectedOption) => selectedOption.name === option.name)?.value ?? ""}
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
          isDisabled={quantity === 1}
        />
        <Text width={"6"} textAlign={"center"}>
          {quantity}
        </Text>
        <IconOutlineButton icon={<AddIcon />} aria-label={"Increment"} onClick={increment} />
      </HStack>
      <div>
        <ActionButton
          onClick={() => {
            if (!selectedVariant) return;
            addToCart(product, selectedVariant, quantity);
            onAdd();
          }}
          square
          leftIcon={<AddIcon />}
          size={"md"}
          px={8}
        >
          Add to Cart
        </ActionButton>
      </div>
    </>
  );
};

export default ProductContent;
