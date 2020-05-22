import styled, { css } from "styled-components";

interface HeadingProps {
  as?: string;
}

export const Heading = styled.h1<HeadingProps>`
  font-size: 55px;
  margin-top: 0;

  ${(props) =>
    props.as === `h2` &&
    css`
      font-size: 24px;
    `}
`;
