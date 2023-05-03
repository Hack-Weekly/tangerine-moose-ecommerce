import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
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
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

import { ActionButton, IconOutlineButton } from "~/components/Button";
import { useCart } from "~/contexts/cart";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity, cartItems, totalQuantity, totalPrice } = useCart();

  return (
    <Drawer isOpen={isOpen} placement="right" size={"md"} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cart {totalQuantity && <span>({totalQuantity} items)</span>}</DrawerHeader>

        <DrawerBody>
          {cartItems.length === 0 ? (
            <Flex height={"full"} alignItems={"center"} justifyContent={"center"}>
              <Text fontWeight={"bold"} fontSize="lg">
                Your cart is empty.
              </Text>
            </Flex>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant.id}`}>
                  <HStack justifyContent={"space-between"} py={2} borderBottom={"1px"}>
                    <Flex>
                      <Image src={item.image_url} alt={item.name} boxSize={"64px"} mr={2} alignSelf={"center"} />
                      <Flex flexDir={"column"}>
                        <div>
                          <Text fontWeight={"bold"} fontSize="lg">
                            {item.name}
                          </Text>
                          <UnorderedList listStyleType={"none"} margin={0} fontSize={"sm"}>
                            {item.variant.options.map((option) => (
                              <ListItem key={option.name}>
                                {`${option.name}: `}
                                <Text as={"span"} fontWeight={"semibold"}>
                                  {option.value}
                                </Text>
                              </ListItem>
                            ))}
                          </UnorderedList>
                        </div>
                      </Flex>
                    </Flex>
                    <VStack alignItems={"flex-end"}>
                      <Text>Qty.</Text>
                      <HStack spacing={"2"}>
                        <IconOutlineButton
                          icon={<MinusIcon />}
                          aria-label={"Decrement"}
                          onClick={() => {
                            if (item.quantity > 1) {
                              decreaseQuantity(item.id, item.variant.id);
                            } else {
                              removeFromCart(item.id, item.variant.id);
                            }
                          }}
                        />
                        <Text textAlign={"center"} minWidth={6}>
                          {item.quantity}
                        </Text>
                        <IconOutlineButton
                          icon={<AddIcon />}
                          aria-label={"Increment"}
                          onClick={() => increaseQuantity(item.id, item.variant.id)}
                        />
                        <IconOutlineButton
                          icon={<DeleteIcon />}
                          aria-label={"Remove"}
                          onClick={() => removeFromCart(item.id, item.variant.id)}
                        />
                      </HStack>
                      <Text fontSize={"lg"} fontWeight={"semibold"}>
                        {new Intl.NumberFormat(undefined, {
                          style: "currency",
                          currency: "USD",
                        }).format((item.price * item.quantity) / 100)}
                      </Text>
                    </VStack>
                  </HStack>
                </div>
              ))}
            </>
          )}
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <VStack w={"full"} alignItems={"flex-end"} fontSize={"lg"}>
            <Text>
              Quantity:{" "}
              <Text as={"span"} fontWeight={"semibold"}>
                {totalQuantity}
              </Text>
            </Text>
            <Text>
              Total:{" "}
              <Text as={"span"} fontWeight={"semibold"}>
                {new Intl.NumberFormat(undefined, {
                  style: "currency",
                  currency: "USD",
                }).format(totalPrice / 100)}
              </Text>
            </Text>
            <ActionButton size={"lg"} w={"full"} as={Link} href={"/checkout"} onClick={() => undefined}>
              Checkout
            </ActionButton>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
