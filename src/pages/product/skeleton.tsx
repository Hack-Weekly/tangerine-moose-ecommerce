import { Container, Flex, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";

const colors = {
  startColor: "primary.500",
  endColor: "primary.700",
};

const ProductSkeleton = () => (
  <Container maxW="4xl" mt={[null, "16"]}>
    <Stack direction={["column", "row"]} gap={"16"}>
      <SkeletonCircle {...colors} borderRadius={0} boxSize={"sm"} />
      <Flex flexDir={"column"} width={"full"} gap={"16"} flex={1}>
        <Stack gap={"8"}>
          <SkeletonText {...colors} width={"33%"} noOfLines={1} skeletonHeight={4} />
          <SkeletonText {...colors} width={"50%"} />
        </Stack>
        <SkeletonCircle {...colors} borderRadius={0} width={"80px"} />
      </Flex>
    </Stack>
  </Container>
);

export default ProductSkeleton;
