import styled, { css } from "styled-components";

interface TextProps {
  small?: boolean;
  big?: boolean;
}

export const Text = styled.p<TextProps>`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 12px;

  ${(props) =>
    props.small &&
    css`
      font-size: 10px;
    `}
  ${(props) =>
    props.big &&
    css`
      font-size: 14px;
    `}
`;
