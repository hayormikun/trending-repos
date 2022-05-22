import { Button, Container, HStack, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { SingleRepo } from "./SingleRepo";

const fetchRepos = ({ queryKey }) => {
  return axios.get(
    `https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc`
    // page=${queryKey[1]}
  );
};
export const Repos = () => {
  const [page, setPage] = useState();

  const { data, status, isPreviousData } = useQuery(
    ["repos", page],
    fetchRepos,
    {
      keepPreviousData: true,
    }
  );
  console.log(data);

  if (status === "loading") {
    return <div>loading...</div>;
  }

  if (status === "error") {
    return <div>error</div>;
  }

  return (
    <Container size={"container.lg"}>
      <VStack gap={"5"}>
        {data?.data?.items?.map((repo) => (
          <SingleRepo repo={repo} />
        ))}

        <HStack>
          <Button
            disabled={page === 1}
            onClick={() => {
              setPage((old) => old - 1);
            }}
          >
            Previous
          </Button>
          <Button
            disabled={isPreviousData && !data?.data?.next}
            onClick={() => {
              setPage((old) => old + 1);
            }}
          >
            Next
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};
