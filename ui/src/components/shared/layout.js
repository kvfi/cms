import {
  Container,
  Flex,
  Grid,
  GridItem
} from "@chakra-ui/react";
import Sidebar from "components/shared/sidebar";
import Helmet from "react-helmet";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

const Layout = () => {
  const website = useSelector((state) => state.website);

  return (
    <>
      <Helmet>
        <title>{website.title}</title>
        <meta charSet="utf-8" />
      </Helmet>
      <Container maxW="container.xl" p={0}>
        <Flex py={20}>
          <Grid templateColumns="repeat(10, 1fr)" gap={5} w="full">
            <GridItem as="aside" colSpan="3" bg="gray.200" p={3}>
              <Sidebar />
            </GridItem>
            <GridItem as="main" colSpan="7">
              <Outlet />
            </GridItem>
          </Grid>
        </Flex>
      </Container>
    </>
  );
};

export default Layout;
