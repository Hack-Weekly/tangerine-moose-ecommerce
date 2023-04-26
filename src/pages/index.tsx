import { type NextPage } from "next";
import Image from "next/image";
import { Flex, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

import { api } from "~/utils/api";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.showcaseContainer}>
          <AuthShowcase />
        </div>
      </div>
    </>
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
