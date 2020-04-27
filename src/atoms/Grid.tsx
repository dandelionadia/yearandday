import React from "react";
import { Box } from "atomic-layout";

export const Grid: React.FC = ({ children }) => {
  return <Box paddingHorizontal={2.25}>{children}</Box>;
};
