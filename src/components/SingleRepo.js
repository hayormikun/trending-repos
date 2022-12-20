import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { differenceInDays } from "date-fns";

export const SingleRepo = ({ repo }) => {
  return (
    <HStack
      boxShadow={"lg"}
      m={"10"}
      p={"auto"}
      w={["97%", "97%", "50%", "50%"]}
      _hover={{
        boxShadow: "xl",
      }}
    >
      <Link
        key={repo.id}
        href={repo.html_url}
        textDecoration={"none"}
        _hover={{
          textDecoration: "none",
          outline: "none",
        }}
        _active={{
          textDecoration: "none",
          outline: "none",
        }}
        _focus={{
          textDecoration: "none",
          outline: "none",
        }}
      >
        <Flex>
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
            <Text p={1}>{repo.description}</Text>
            <Flex direction={["column", "coloumn", "row", "row"]} gap={3}>
              <HStack gap={"2"} pb={2}>
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
                submitted{" "}
                {differenceInDays(new Date(), new Date(repo.created_at))} days
                ago by {repo.owner.login}
              </Text>
            </Flex>
          </VStack>
        </Flex>
      </Link>
    </HStack>
  );
};
