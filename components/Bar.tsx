import React from 'react'
import { Box, makeResponsive, Only } from 'atomic-layout'
import styled from 'styled-components'
import { FiShoppingCart } from 'react-icons/fi'

const CartIcon = makeResponsive(FiShoppingCart)

const StyledBoxCartIcon = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  background-color: ${({ theme }) => theme.colors.orangeLight};
  border-radius: 50%;
`

const StyledCartIcon = styled(CartIcon)``

export const Bar: React.FC = () => {
  return (
    <Box flex alignItems="center">
      <Only from="md">
        <a href="#">Account</a>
      </Only>
      <Box
        as={StyledBoxCartIcon}
        flex
        justifyContent="center"
        alignItems="center"
        marginLeft="20px"
      >
        <StyledCartIcon size="15" fill="#fff" />
      </Box>
    </Box>
  )
}
