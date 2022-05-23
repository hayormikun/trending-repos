import { Box, Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box width={"100%"}>
      <Center>
        <Text pt={"5"}>
          Hi, go to <Link to={"/github"}>"/github"</Link> to see list of top
          starred repos
        </Text>
      </Center>
    </Box>
  );
};
