import { Center, Flex, Image, Text } from "@chakra-ui/react";

const Empty = ({ message }: { message?: string }) => (
  <Flex flexDir={["column", null, "row"]} alignContent={"center"} textAlign={"center"}>
    <Center>
      <Image boxSize={"xl"} src="/nothingtoseehere.svg" alt="empty page" minBlockSize={"lg"} />
    </Center>
    <Text fontSize={["4xl", "3xl"]} fontWeight={"bold"} m={"auto"}>
      {message || "sorry, we’re all out."}
    </Text>
  </Flex>
);

export default Empty;
