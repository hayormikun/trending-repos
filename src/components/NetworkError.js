import { Box, Center, Text} from "@chakra-ui/react";

export const NetworkError = () => {
  return (
    <Box width={"100%"} bgColor={"azure"}>
      <Center h={"100vh"}>
        <Text fontSize={32} fontWeight={"bold"} color={"gray.900"}>Error encountered while loading repos. Please try again</Text>
      </Center>
    </Box>
  );
};
