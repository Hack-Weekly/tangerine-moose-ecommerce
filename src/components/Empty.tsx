import { Image, Stack, Text } from "@chakra-ui/react";

const Empty = () => (
  <Stack>
    <Image boxSize={"lg"} src="/nothingtoseehere.svg" alt="empty page" />
    <Text fontSize={"4xl"} fontWeight={"bold"} textAlign={"center"}>
      sorry, we’re all out.
    </Text>
  </Stack>
);

export default Empty;
