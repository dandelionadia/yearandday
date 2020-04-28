import React from "react";
import { Box, Composition } from "atomic-layout";
import styled from "styled-components";
import { Heading } from "../atoms/Heading";
import { Button } from "../atoms/Button";
import { Image } from "../atoms/Image";
import { CardLink } from "../atoms/CardLink";

const Container = styled.div`
  max-width: 600px;
`;

export const ProductItem: React.FC = () => {
  return (
    <Box as={Container}>
      <Heading as="h2">Mugs</Heading>
      <Image src="https://s3.amazonaws.com/year-and-day/app/public/spree/products/712/product/Mug_Moon_Set.jpg?1509378345" />
      <Composition templateCols="repeat(2, 1fr)">
        <CardLink href="#">More Info</CardLink>
        <Button>Add to Cart</Button>
      </Composition>
    </Box>
  );
};
