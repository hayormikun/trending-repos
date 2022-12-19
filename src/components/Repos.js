import { Box, Button, Center, HStack, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Loading } from "./Loading";
import { SingleRepo } from "./SingleRepo";
import { subMonths, format } from "date-fns";

const monthInterval = subMonths(new Date(), 3);
const date = format(monthInterval, "yyyy-MM-dd");

const fetchRepos = ({ queryKey }) => {
  return axios.get(
    `${process.env.REACT_APP_BASE_API}${date}${process.env.REACT_APP_PARAMS}${queryKey[1]}`
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

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error encountered will loading repos... try again</div>;
  }

  return (
    <Box width={"100%"} bgColor={"azure"}>
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
