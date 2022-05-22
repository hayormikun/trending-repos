import { Heading, HStack, Img, Tag, TagLabel, TagRightIcon, Text, VStack } from "@chakra-ui/react";

export const SingleRepo = () => {
  return (
    <HStack>
      <Img />
      <VStack>
        <Heading>hi</Heading>
        <Text></Text>
        <HStack>
          <Tag variant="outline" colorScheme="blue">
            <TagLabel>Blue</TagLabel>
            <TagRightIcon/>
          </Tag>
          <Text></Text>
        </HStack>
      </VStack>
    </HStack>
  );
};
