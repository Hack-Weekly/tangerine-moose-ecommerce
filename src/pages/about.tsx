import { Link } from "@chakra-ui/next-js";
import { Container, Heading, Image, Stack, Text } from "@chakra-ui/react";

const AboutPage = () => (
  <Container maxW={"4xl"} mt={[8, null, 16]}>
    <Heading textAlign={"center"} mb={[null, null, 16]}>
      Our Story
    </Heading>
    <Stack direction={["column", null, "row"]} gap={[null, null, 12]} alignItems={"center"}>
      <Image alt={"company"} src={"tangerine.svg"} maxBlockSize={"xs"} />
      <Text alignSelf={"center"}>
        Established in April 2023, <b>TANGERINE</b> is a fictional online coffee and tea supplier with a real and mostly
        functional website. <br />
        <br />
        After first starting as a Figma{" "}
        <Link fontWeight={"bold"} href={"https://www.figma.com/file/0TQXFR8yG5iDG4ava7UEpC/tangerine_commerce"}>
          design file
        </Link>
        , the site was made using TypeScript, Next.js, NextAuth.js, Prisma, Chakra UI, and Stripe Checkout.
        <br />
        <br />
        The online marketplace features a wide range of coffees, teas and equipment which can be filtered by tags, or
        sorted by price and name. These products come in different sizes, packages and configurations, and can be added
        to a cart and finally purchased (not really).
        <br />
        <br />
        The source code is available on{" "}
        <Link fontWeight={"bold"} href={"https://github.com/Hack-Weekly/tangerine-moose-ecommerce"}>
          GitHub
        </Link>
        .
        <br />
        <br />
      </Text>
    </Stack>
  </Container>
);

export default AboutPage;
