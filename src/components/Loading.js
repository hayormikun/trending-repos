import { Box, Center, Text, VStack } from "@chakra-ui/react";
import { ClipLoader } from "react-spinners";

export const Loading = () => {
  return (
    <Box width={"100%"} bgColor={"azure"}>
      <Center h={"100vh"}>
        <VStack gap={2}>
        <ClipLoader color={"gray.500"} size={32} />
        <Text fontWeight={"semibold"} color={"gray.500"}>Loading...</Text>
        </VStack>
      </Center>
    </Box>
  );
};
