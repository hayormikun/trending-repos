import { Heading, HStack, Image, Tag, Text, VStack } from "@chakra-ui/react";
import { differenceInDays } from "date-fns";

export const SingleRepo = ({ repo }) => {
  return (
    <HStack key={repo.id} boxShadow={"lg"} p={"5"}>
      <Image
        boxSize="150px"
        objectFit="cover"
        src={repo.owner.avatar_url}
        alt={repo.name}
        mr={"5"}
        boxShadow={"sm"}
        borderLeftColor={"black"}
      />
      <VStack alignItems={"start"}>
        <Heading as={"h4"}>{repo.name}</Heading>
        <Text>{repo.desc}</Text>
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
          <Text>
            submitted {differenceInDays(new Date(), new Date(repo.created_at))}{" "}
            days ago by {repo.owner.login}
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};
