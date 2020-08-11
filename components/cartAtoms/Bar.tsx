import React from "react";
import { Composition } from "atomic-layout";
import styled from "styled-components";

const Container = styled.span`
  color: var(--color-blue-light);
  margin: 0 22px 0 22px;
  padding-bottom: 13px;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-blue-light);
`;

export const Bar: React.FC = () => {
  return (
    <Composition as={Container} gap={3} templateCols="1fr auto auto">
      <span>Product</span>
      <span>Qntity</span>
      <span>Total</span>
    </Composition>
  );
};
