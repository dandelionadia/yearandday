import React from "react";
import styled from "styled-components";
import { Composition } from "atomic-layout";

import { Top } from "./cartAtoms/Top";
import { Bottom } from "./cartAtoms/Bottom";

const Container = styled.div`
  width: 480px;
  height: calc(100vh - 72px);
  right: 0;
  margin: 0;
  border-top: 1px solid var(--color-orange-light);
  box-sizing: border-box;
  position: absolute;
`;

const areasMobile = `
  topSection
  content
  bottomSection
`;

export const Cart: React.FC = () => {
  return (
    <Composition as={Container} areas={areasMobile} gap={10}>
      {(Areas) => (
        <>
          <Areas.TopSection>
            <Top />
          </Areas.TopSection>
          <Areas.Content>content</Areas.Content>
          <Areas.BottomSection align="flex-end">
            <Bottom />
          </Areas.BottomSection>
        </>
      )}
    </Composition>
  );
};
