import React from "react";
import { Box, Composition } from "atomic-layout";
import styled from "styled-components";

import { Heading } from "../../atoms/Heading";
import { Text } from "../../atoms/Text";

const Container = styled.span`
  padding: 22px;
`;

const StyledImages = styled.img`
  width: 5rem;
`;

const StyledText = styled.div`
  margin: 0;
`;

export const Content: React.FC = () => {
  return (
    <Composition as={Container} gap={3} templateCols="1fr auto auto">
      <span>
        <Composition gap={0.7} templateCols="auto 1fr">
          <Box>
            <StyledImages
              src="https://s3.amazonaws.com/year-and-day/app/public/spree/products/720/mini/Serving-Bowl_Fog_Single.jpg?1509378361"
              alt="product_image"
            />
            <Text as={StyledText}>text</Text>
          </Box>
          <Box flex flexDirection="column">
            <Heading as="h4">Serving Bowl</Heading>
            <Text>text</Text>
          </Box>
        </Composition>
      </span>
      <span>+ 1 -</span>
      <span>$96.00</span>
    </Composition>
  );
};
