import { Center, Flex, Image, Link, Text, type StyleConfig } from "@chakra-ui/react";

const random = <T,>(list: T[]): T | undefined => list[Math.floor(Math.random() * list.length)];
const getColor = () => `${random(["red", "purple", "blue", "green"]) || "primary"}.500`;
const linkStyle = () => {
  const color = getColor();

  return {
    baseStyle: {
      color: color,
      backgroundImage: `linear-gradient(${color}, ${color})`,
      backgroundSize: "0% 0.1em",
      backgroundPositionY: "100%",
      backgroundPositionX: "0%",
      backgroundRepeat: "no-repeat",
      transition: "background-size 0.2s ease-in-out",
      _hover: {
        backgroundSize: "100% 0.1em",
      },
      _focusVisible: {
        backgroundSize: "100% 0.1em",
        outline: "none",
      },
    },
  } as StyleConfig;
};

const arr = [
  <>
    {"care for some "}
    <Link styleConfig={linkStyle()} href={"/coffee"}>
      coffee
    </Link>
    ?
  </>,
  <>
    {"fancy some "}
    <Link styleConfig={linkStyle()} href={"/tea"}>
      tea
    </Link>
    ?
  </>,
  <>
    {"check out our "}
    <Link styleConfig={linkStyle()} href={"/equipment"}>
      equipment
    </Link>
    .
  </>,
];

const DefaultMessage = () => (
  <>
    {"sorry, it seems like we don’t have that, "}
    {random(arr)}
  </>
);

const Empty = ({ message }: { message?: string }) => (
  <Flex flexDir={"column"} alignContent={"center"} textAlign={"center"}>
    <Center>
      <Image boxSize={"xl"} src="/nothingtoseehere.svg" alt="empty page" minBlockSize={"lg"} />
    </Center>
    <Text fontSize={["4xl", "3xl"]} fontWeight={"bold"} m={"auto"} w={["auto", null, "50%"]}>
      {message ? message : DefaultMessage()}
    </Text>
  </Flex>
);

export default Empty;
