import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

import { ActionButton, OutlineButton } from "~/components/Button";
import { useCart } from "~/contexts/cart";

// TODO: add quantity selector, and price calculation
type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { removeFromCart, cartItems } = useCart();

  return (
    <Drawer isOpen={isOpen} placement="right" size={"md"} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Shopping Cart</DrawerHeader>

        <DrawerBody>
          {cartItems.length === 0 && <Text>It is empty in here</Text>}
          {cartItems.map((item) => (
            <div key={item.id}>
              <HStack justifyContent={"space-between"}>
                <Image src={item.product.image_url} alt={item.product.name} boxSize={"64px"} alignSelf={"center"} />
                <Flex flexDir={"column"}>
                  <div>
                    <Text fontWeight={"bold"} fontSize="lg">
                      {item.product.name}
                    </Text>
                    <Text>{item.product.primary_tag.toUpperCase()}</Text>
                  </div>
                </Flex>
                <Box>
                  <Text textAlign={"center"}>Qty.</Text>
                  <Text textAlign={"center"}>{item.quantity}</Text>
                </Box>
                <ActionButton onClick={() => removeFromCart(item.id)}>Remove</ActionButton>
              </HStack>
            </div>
          ))}
        </DrawerBody>

        <DrawerFooter>
          <OutlineButton size={"lg"} w={"full"} as={Link} href={"/checkout"} onClick={() => undefined}>
            Check out
          </OutlineButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
