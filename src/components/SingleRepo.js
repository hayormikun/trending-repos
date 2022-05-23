import {
  Heading,
  HStack,
  Image,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { differenceInDays } from "date-fns";

export const SingleRepo = ({ repo }) => {

  return (
    <HStack key={repo.id}>
      <Image
        boxSize="150px"
        objectFit="cover"
        src={repo.owner.avatar_url}
        alt={repo.name}
      />
      <VStack>
        <Heading as={"h3"}>{repo.name}</Heading>
        <Text>{repo.desc}</Text>
        <HStack gap={"3"}>
          <Tag variant="outline" colorScheme="teal">
            <TagLabel>Stars: {repo.stars} </TagLabel>
          </Tag>
          <Tag variant="outline" colorScheme="teal">
            <TagLabel>Issues: {repo.issues} </TagLabel>
          </Tag>
          <Text>
            submitted {differenceInDays(new Date(), new Date(repo.created_at))} days ago by {repo.owner.login}
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

// format(subDays(date, repo.created_at), 'D')
