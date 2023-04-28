import { useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { HStack, Menu, MenuItem, MenuList, Text } from "@chakra-ui/react";

import { ActionButton, IconOutlineButton } from "./Button";
import Dropdown from "./Dropdown";
import type { Coffee } from "./types/product";

const CoffeeContent = ({ product }: { product: Coffee }) => {
  const [price, setPrice] = useState(product.base_price);
  const [size, setSize] = useState(product.variants[0]?.variant.label || "");
  const [grind, setGrind] = useState(product.grindOptions[0]?.label || "");
  const selectVariant = (label: "340g" | "680g" | "2.3kg", price: number) => {
    setPrice(price);
    setSize(label);
  };

  const [quantity, setQuantity] = useState(1);
  const decrement = () => setQuantity((prevQuantity) => prevQuantity - 1);
  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);

  return (
    <>
      <Text fontWeight={"bold"} fontSize="xl">{`$${(quantity * price) / 100}`}</Text>
      <Menu matchWidth>
        <Dropdown label={"Size"} value={size} />
        <MenuList borderRadius={0} borderWidth={1} borderColor={"primary.500"}>
          {product.variants.map(({ variant, price }) => (
            <MenuItem key={variant.weight} onClick={() => selectVariant(variant.label, price)}>
              {variant.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Menu matchWidth>
        <Dropdown label={"Grind"} value={grind} />
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
        <ActionButton onClick={() => console.log("added to cart")} square leftIcon={<AddIcon />} size={"md"} px={8}>
          Add to Cart
        </ActionButton>
      </div>
    </>
  );
};

export default CoffeeContent;
