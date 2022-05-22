import {
  Heading,
  HStack,
  Image,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
  VStack,
} from "@chakra-ui/react";

export const SingleRepo = ({repo}) => {
  return (
    <HStack>
      <Image boxSize="150px" objectFit="cover" src={repo.avatar_url} alt="Avatar" />
      <VStack>
        <Heading>{repo.name}</Heading>
        <Text>{repo.desc}</Text>
        <HStack>
          <Tag variant="outline" colorScheme="blue">
            <TagLabel>Blue</TagLabel>
            <TagRightIcon />
          </Tag>
          <Text>{repo.created_at}</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};
