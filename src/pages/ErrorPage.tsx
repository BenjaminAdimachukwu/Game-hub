import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={10}>
        <Heading> Oops! sorry... </Heading>
        {isRouteErrorResponse(error) ? (
          <Text> This Page does not exist </Text>
        ) : (
          "An unexpected error occured"
        )}
      </Box>
    </>
  );
};

export default ErrorPage;
