import { ChevronDownIcon } from "@chakra-ui/icons";
import { MenuButton, Text } from "@chakra-ui/react";

import { OutlineButton } from "./Button";

const Dropdown = ({ label, value }: { label: string; value: string }) => (
  <div>
    <Text fontWeight={"bold"}>{label}</Text>
    <MenuButton
      as={OutlineButton}
      square
      rightIcon={<ChevronDownIcon />}
      width={"fit-content"}
      _hover={{ boxShadow: "1px 1px black" }}
    >
      {value}
    </MenuButton>
  </div>
);

export default Dropdown;
