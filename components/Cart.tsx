import React from "react";
import { Box } from "atomic-layout";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 100vh;
`;

export const Cart: React.FC = () => {
  return (
    <Box as={Container}>
      <p>cart</p>
    </Box>
  );
};
