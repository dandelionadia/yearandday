import styled, { css } from "styled-components";

interface ButtonProps {
  as?: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: var(--color-yellow);
  color: var(--color-blue);
  padding: 1rem 0.8rem;
  text-align: center;
  font-size: 16px;
  max-width: 100%;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.as === `blue` &&
    css`
      background-color: var(--color-blue);
      color: #fff;
      text-align: left;
    `}

  ${(props) =>
    props.as === `orangeLight` &&
    css`
      baclground-color: var(--color-orange-light);
    `}
`;
