import { Box, Center, Text} from "@chakra-ui/react";

export const Error = () => {
  return (
    <Box width={"100%"} bgColor={"azure"}>
      <Center h={"100vh"}>
        <Text fontSize={32} fontWeight={"bold"} color={"gray.900"}>404... page doesn't exist</Text>
      </Center>
    </Box>
  );
};
