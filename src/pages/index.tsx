import { type NextPage } from "next";
import Image from "next/image";
import { Link } from "@chakra-ui/next-js";
import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

import products from "~/data/products.json";
import { api } from "~/utils/api";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <Grid templateColumns={"repeat(12, 1fr)"} gridAutoFlow={"dense"}>
      {products.slice(0, 24).map((product, index) => (
        <GridItem
          href={`${product.category}/${product.id}`}
          as={Link}
          position={"relative"}
          key={product.id}
          colSpan={[12, null, index % 4 === 0 ? 8 : 4]}
          rowSpan={[1, null, index % 4 === 0 ? 2 : 1]}
        >
          <Image src={product.image} alt={product.name} width={720} height={720} className={styles.image} />
          <Flex
            direction={"column"}
            position={"absolute"}
            inset={0}
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
          >
            <Text bg={"blackAlpha.900"} p={2}>
              {product.category}
            </Text>
            <Heading size={"lg"} bg={"blackAlpha.900"} p={2}>
              {product.name}
            </Heading>
            <Text bg={"blackAlpha.900"} p={2}>
              {product.vendor}
            </Text>
            {product.variants.length && product.variants[0] && (
              <Text bg={"blackAlpha.900"} p={2}>
                {new Intl.NumberFormat(undefined, {
                  style: "currency",
                  currency: "USD",
                }).format(product.variants[0].price)}
              </Text>
            )}
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className={styles.authContainer}>
      <p className={styles.showcaseText}>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <Flex flexDir={"column"} gap={16}>
        <Text>Test content for scroll</Text>
        <Image src={"/beans.jpg"} alt="beans" width={1120} height={1080} />
        <Image src={"/beans.jpg"} alt="beans" width={1120} height={1080} />
        <Image src={"/beans.jpg"} alt="beans" width={1120} height={1080} />
      </Flex>
    </div>
  );
};
