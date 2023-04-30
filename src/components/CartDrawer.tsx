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
  VStack,
} from "@chakra-ui/react";

import { ActionButton } from "~/components/Button";
import { useCart } from "~/contexts/cart";

// TODO: add quantity selector, and price calculation
// TODO: should show selected product variant instead
type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { removeFromCart, cartItems, totalQuantity } = useCart();

  return (
    <Drawer isOpen={isOpen} placement="right" size={"md"} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cart {totalQuantity && <span>({totalQuantity} items)</span>}</DrawerHeader>

        <DrawerBody>
          {cartItems.length === 0 && (
            <Flex height={"full"} alignItems={"center"} justifyContent={"center"}>
              <Text fontWeight={"bold"} fontSize="lg">
                Your cart is empty.
              </Text>
            </Flex>
          )}
          {cartItems.map((item) => (
            <div key={item.id}>
              <HStack justifyContent={"space-between"} py={2} borderBottom={"1px"}>
                <Flex>
                  <Image src={item.product.image_url} alt={item.product.name} boxSize={"64px"} alignSelf={"center"} />
                  <Flex flexDir={"column"}>
                    <div>
                      <Text fontWeight={"bold"} fontSize="lg">
                        {item.product.name}
                      </Text>
                      <Text>{item.product.primary_tag.toUpperCase()}</Text>
                    </div>
                  </Flex>
                </Flex>
                <Flex alignItems={"center"}>
                  <Box mr={6}>
                    <Text textAlign={"center"}>Qty.</Text>
                    <Text textAlign={"center"}>{item.quantity}</Text>
                  </Box>
                  <ActionButton onClick={() => removeFromCart(item.id)}>Remove</ActionButton>
                </Flex>
              </HStack>
            </div>
          ))}
        </DrawerBody>

        <DrawerFooter>
          <VStack w={"full"} alignItems={"flex-end"}>
            <Text>Quantity: {totalQuantity}</Text>
            <Text>Total: $0.00</Text>
            <ActionButton size={"lg"} w={"full"} as={Link} href={"/checkout"} onClick={() => undefined}>
              Checkout
            </ActionButton>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
