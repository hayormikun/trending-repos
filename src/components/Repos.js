import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { SingleRepo } from "./SingleRepo";

const fetchRepos = ({ queryKey }) => {
  return axios.get(
    `https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc&page=${queryKey[1]}`
  );
};
export const Repos = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, isPreviousData } = useQuery(
    ["repos", page],
    fetchRepos,
    {
      keepPreviousData: true,
      staleTime: 30000,
    }
  );
  console.log(data);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <Box width={"100%"}>
      <Center>
        <HStack my={"5"}>
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
      </Center>
      <VStack gap={"5"}>
        {data?.data?.items?.map((repo) => (
          <SingleRepo repo={repo} />
        ))}
      </VStack>
    </Box>
  );
};
