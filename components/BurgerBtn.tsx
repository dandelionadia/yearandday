import styled from 'styled-components'

const StyledMenuBtn = styled.div`
  position: relative;
  z-index: 3;
  cursor: pointer;
`

const StyledMenuLine = styled.div`
  background-color: black;
  width: 20px;
  height: 2.5px;

  :not(:last-child) {
    margin: 0 0 5px 0;
  }
`

export const BurgerBtn = () => {
  return (
    <StyledMenuBtn>
      <StyledMenuLine />
      <StyledMenuLine />
      <StyledMenuLine />
    </StyledMenuBtn>
  )
}
