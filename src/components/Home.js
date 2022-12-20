import { Box, Button, Center, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home = () => {
  console.log()
  return (
    <Box width={"100%"} bgColor={"azure"} color={"gray.900"}>
      <Center h={"100vh"}>
        <VStack spacing={7} justifyItems={"center"} textAlign={"center"}>
          <Heading as={"h1"} fontWeight={"bold"}>
            View the most starred Github projects
          </Heading>
          <Heading as={"h2"} pb={5} fontSize={"2xl"} fontWeight={"semibold"}>
            created in the last 3 months
          </Heading>
          <Button
            type="button"
            textAlign={"center"}
            py={5}
            px={7}
            size="lg"
            rounded={"lg"}
            fontSize={"xl"}
            fontWeight={"bold"}
            variant="solid"
            bgColor={"teal.500"}
            color={"gray.100"}
            _hover={{
              bgColor: "teal.700",
              color: "gray.100",
              boxShadow: "lg",
            }}
            _active={{
              boxShadow: "lg",
            }}
          >
            <Link to={"/trending"}>Click Here!</Link>
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};
