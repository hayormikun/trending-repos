import {
  Heading,
  HStack,
  Image,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";

export const SingleRepo = ({repo}) => {
  return (
    <HStack>
      <Image boxSize="150px" objectFit="cover" src={repo.avatar_url} alt={repo.name} />
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
          <Text>submitted {repo.created_at} days ago by {repo.author}</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};
