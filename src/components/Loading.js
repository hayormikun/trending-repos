import { Box, Center, Text, VStack } from "@chakra-ui/react";
import { ClipLoader } from "react-spinners";

export const Loading = () => {
  return (
    <Box width={"100%"} bgColor={"azure"}>
      <Center h={"100vh"}>
        <VStack spacing={2}>
        <ClipLoader color={"gray.900"} size={40} />
        <Text fontWeight={"semibold"} color={"gray.900"}>Loading...</Text>
        </VStack>
      </Center>
    </Box>
  );
};
