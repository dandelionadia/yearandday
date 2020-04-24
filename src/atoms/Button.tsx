import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.blue};
  padding: 1rem 0.8rem;
  text-align: center;
  max-width: 100%;
  border: none;
  cursor: pointer;
`;
