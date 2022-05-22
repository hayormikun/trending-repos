import { Container, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";
import { SingleRepo } from "./SingleRepo";

const fetchRepo = () => {
  return axios.get(
    "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc"
  );
};
export const Repos = () => {
  const { data, status } = useQuery("repos", fetchRepo);
  console.log(data)

  if (status === "loading") {
    return  <div>loading...</div>;
  }

  if (status === "error") {
    return  <div>error</div>;
  }

  return (
    <Container size={"container.lg"}>
      <VStack gap={"5"}>
        {data?.items?.map((repo) => (
          <SingleRepo repo={repo} />
        ))}
      </VStack>
    </Container>
  );
};
