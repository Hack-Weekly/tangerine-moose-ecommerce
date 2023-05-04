import { type ParsedUrlQuery } from "querystring";
import { useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { useCart } from "~/contexts/cart";
import { ActionButton } from "./Button";

type ModalProps = {
  query: ParsedUrlQuery;
  onDrawerOpen: () => void;
};

const OrderModal = ({ query, onDrawerOpen }: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { clearCart } = useCart();
  const success = query.success === "true";
  const canceled = query.canceled === "true";

  useEffect(() => {
    (success || canceled) && onOpen();
  }, [canceled, onOpen, query, success]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{success ? "Order placed!" : canceled && "Order canceled"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {success ? "You will receive an email confirmation." : canceled && "Would you like to try again?"}
        </ModalBody>
        <ModalFooter>
          {success ? (
            <ActionButton
              square
              onClick={() => {
                onClose();
                clearCart();
              }}
            >
              Close
            </ActionButton>
          ) : (
            <ActionButton
              square
              onClick={() => {
                onClose();
                onDrawerOpen();
              }}
            >
              Show Cart
            </ActionButton>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
