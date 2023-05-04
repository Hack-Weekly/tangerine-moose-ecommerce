import { type ParsedUrlQuery } from "querystring";
import { useEffect } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();

  useEffect(() => {
    (success || canceled) && onOpen();
  }, [canceled, onOpen, query, success]);

  const handleClose = async () => {
    if (success) {
      clearCart();
    }
    const params = query;
    delete params.success;
    delete params.canceled;
    await router.replace({ pathname: router.pathname, query: params }, undefined, { scroll: false, shallow: true });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={() => void handleClose()}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{success ? "Order placed!" : canceled && "Order canceled"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {success ? "You will receive an email confirmation." : canceled && "Would you like to try again?"}
        </ModalBody>
        <ModalFooter>
          {success ? (
            <ActionButton square onClick={() => void handleClose()}>
              Close
            </ActionButton>
          ) : (
            <ActionButton
              square
              onClick={() => {
                void handleClose();
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
