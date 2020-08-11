import React from "react";
import { Box, Composition } from "atomic-layout";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--color-blue);
`;

import { Button } from "../../atoms/Button";

export const Bottom: React.FC = () => {
  return (
    <Composition as={Container} padding={1.5} templateCols="repeat(2, 1fr)">
      <Button as="blue">← Continue Shopping</Button>
      <Box as={Button} flex justifyContent="space-between" alignItems="center">
        <span>Checkout</span>
        <span>$145.00</span>
      </Box>
    </Composition>
  );
};
