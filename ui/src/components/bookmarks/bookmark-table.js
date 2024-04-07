import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Center,
    Spinner,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { useGetBookmarksQuery } from "components/bookmarks/api";
import { Link } from "react-router-dom";
import { APP_URLS } from "utils/constants";
import { getReadableDate } from "utils/fn";

const BookmarTable = () => {
  const { data, isLoading, isError } = useGetBookmarksQuery();

  if (isError) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>We could not load the table</AlertTitle>
        <AlertDescription>
          We could not render the table. Retry or contact an administrator.
        </AlertDescription>
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <Center>
        <Spinner
          thickness="20px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <TableContainer>
      <Table size="sm" borderWidth={1} variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Saved on</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.results.map((result) => (
            <Tr>
              <Td>
                <Link to={`${APP_URLS.BOOKMARKS}/${result.uuid}`}>
                  {result.resolved_title}
                </Link>
              </Td>
              <Td>{getReadableDate(result.saved_on)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BookmarTable;
