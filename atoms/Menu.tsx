import React from 'react'
import styled from 'styled-components'
import { Box, Composition } from 'atomic-layout'
import { IoIosArrowDown } from 'react-icons/io'

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  :not(:last-child) {
    margin-right: 5px;
  }
`

const StyledLi = styled.li`
  .icon {
    transition: transform 0.4s;
  }
  :hover {
    .icon {
      transform: rotate(-180deg);
    }
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
        <Box as={StyledLi} flex alignItems="flex-end">
          <StyledLink href="#">{item.name}</StyledLink>
          <IoIosArrowDown className="icon" size="20" fill="#d1ac9b" />
        </Box>
      ))}
    </Composition>
  )
}
