import { ArrowsVertical, SortRemove } from "@carbon/icons-react";
import { Box, Fade, Flex, Stack, Tooltip, useRadioGroup } from "@chakra-ui/react";

import sortOptions from "~/data/sort";
import { IconButton, RadioButton } from "./RadioButton";

const SortGroup = ({ onChange }: { onChange: (value: string) => void }) => {
  const { value, setValue, getRadioProps, getRootProps } = useRadioGroup({
    name: "Sort Options",
    defaultValue: "",
    onChange: onChange,
  });

  return (
    <Stack w={"fit-content"}>
      <Flex justifyContent={"center"} p={3}>
        <ArrowsVertical />
      </Flex>
      <Stack {...getRootProps()} alignItems={"center"}>
        {sortOptions.map(({ value, icon }) => {
          return (
            <RadioButton key={value} props={getRadioProps({ value })}>
              {icon}
            </RadioButton>
          );
        })}
        <Box hidden={!value}>
          <Tooltip label={"Remove Sort"} hasArrow openDelay={500}>
            <Fade in={!!value} delay={0.2}>
              <IconButton
                onClick={() => {
                  onChange("");
                  setValue("");
                }}
              >
                <SortRemove />
              </IconButton>
            </Fade>
          </Tooltip>
        </Box>
      </Stack>
    </Stack>
  );
};

export { SortGroup };
