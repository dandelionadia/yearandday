import React from "react";
import { Box } from "atomic-layout";
import styled from "styled-components";
import { IoMdTrash } from "react-icons/io";

const Quantity = styled.span`
  color: var(--color-pink);
  font-weight: bold;
  margin-left: 20px;
  letter-spacing: 1px;
`;

const Delete = styled.span`
  color: var(--color-pink);
`;

const Container = styled.div`
  padding: 22px;
`;

import { Heading } from "../../atoms/Heading";

export const Top: React.FC = () => {
  return (
    <Box
      as={Container}
      flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="baseline"
    >
      <Box flex alignItems="baseline">
        <Heading as="h2">My Cart</Heading>
        <Quantity>N pieces</Quantity>
      </Box>
      <Box flex alignItems="flex-end">
        <Delete>Empty it</Delete>
        <IoMdTrash fill="var(--color-pink)" size="20" />
      </Box>
    </Box>
  );
};
