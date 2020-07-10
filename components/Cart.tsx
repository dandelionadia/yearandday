import React from "react";
import { Box } from "atomic-layout";
import styled from "styled-components";
import { Composition } from "atomic-layout";

const Container = styled.div`
  background-color: pink;
  width: 480px;
  height: calc(100vh - 72px);
  right: 0;
  margin: 0;
  padding: 22px;
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
          <Areas.TopSection>top</Areas.TopSection>
          <Areas.Content>content</Areas.Content>
          <Areas.BottomSection align="flex-end">bottom</Areas.BottomSection>
        </>
      )}
    </Composition>
  );
};
