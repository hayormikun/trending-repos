import {
  Flex,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { differenceInDays } from "date-fns";

export const SingleRepo = ({ repo }) => {
  return (
    <HStack key={repo.id} boxShadow={"lg"} m={"5"} p={"auto"} w={["97%", "97%", "50%", "50%"]}>
      <Image
        boxSize="150px"
        objectFit="cover"
        src={repo.owner.avatar_url}
        alt={repo.name}
        mr={"5"}
        boxShadow={"sm"}
        borderLeftColor={"black"}
      />
      <VStack align={"flex-start"} m={"auto"}>
        <Heading as={"h4"}>{repo.name}</Heading>
     
        <Flex direction={["column", "coloumn", "row", "row"]} gap={3}>
          <HStack gap={"2"}>
            <Tag
              p={"2"}
              w="fitcontent -webkit-fit-content -moz-fit-content -o-fit-content"
              variant="outline"
              size={"md"}
              colorScheme="teal"
            >
              Stars: {repo.watchers_count}
            </Tag>
            <Tag
              p={"2"}
              w="fitcontent -webkit-fit-content -moz-fit-content -o-fit-content"
              variant="outline"
              size={"md"}
              colorScheme="teal"
            >
              Issues: {repo.open_issues_count}
            </Tag>
          </HStack>
          <Text pb={2}>
            submitted {differenceInDays(new Date(), new Date(repo.created_at))}{" "}
            days ago by {repo.owner.login}
          </Text>
        </Flex>
      </VStack>
    </HStack>
  );
};
