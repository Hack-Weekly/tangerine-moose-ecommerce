import { useEffect, useState } from "react";
import { Center, Flex, Image, Link, Text, type StyleConfig } from "@chakra-ui/react";

const Empty = ({ message }: { message?: string }) => {
  const [color, setColor] = useState("blue.500");
  useEffect(() => setColor(`${random(["red", "purple", "blue", "green"]) || "primary"}.500`), []);
  return (
    <Flex flexDir={"column"} alignContent={"center"} textAlign={"center"}>
      <Center>
        <Image boxSize={"xl"} src="/nothingtoseehere.svg" alt="empty page" minBlockSize={"lg"} />
      </Center>
      <Text fontSize={["4xl", "3xl"]} fontWeight={"bold"} m={"auto"} w={["auto", null, "50%"]}>
        {message ? message : DefaultMessage(color)}
      </Text>
    </Flex>
  );
};

export default Empty;

const DefaultMessage = (color: string) => {
  const arr = [
    <>
      {"care for some "}
      <Link styleConfig={linkStyle(color)} href={"/coffee"}>
        coffee
      </Link>
      ?
    </>,
    <>
      {"fancy some "}
      <Link styleConfig={linkStyle(color)} href={"/tea"}>
        tea
      </Link>
      ?
    </>,
    <>
      {"check out our "}
      <Link styleConfig={linkStyle(color)} href={"/equipment"}>
        equipment
      </Link>
      .
    </>,
  ];
  return (
    <>
      {"sorry, it seems like we don’t have that, "}
      {random(arr)}
    </>
  );
};

const random = <T,>(list: T[]): T | undefined => list[Math.floor(Math.random() * list.length)];
const linkStyle = (color: string) => {
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
