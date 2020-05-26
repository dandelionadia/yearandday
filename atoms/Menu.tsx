import React from 'react'
import styled from 'styled-components'
import { Box, Composition } from 'atomic-layout'
import { IoIosArrowDown } from 'react-icons/io'

const StyledLink = styled.a`
  :not(:last-child) {
    margin-right: 5px;
  }
`

interface MenuProps {
  data: Array<{ name: string }>
}

export const Menu: React.FC<MenuProps> = ({ data }) => {
  return (
    <Composition
      as="ul"
      templateCols="repeat(3, auto)"
      textAlign="center"
      gap={1}
    >
      {data.map((item) => (
        <Box as="li" flex alignItems="flex-end">
          <StyledLink href="#">{item.name}</StyledLink>
          <IoIosArrowDown size="20" fill="#d1ac9b" />
        </Box>
      ))}
    </Composition>
  )
}
