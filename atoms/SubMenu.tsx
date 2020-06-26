import React from 'react'
import styled from 'styled-components'
import { Box, Composition } from 'atomic-layout'

const StyledContainer = styled.li`
  position: absolute;
`

const StyledLink = styled.a`
  :not(:last-child) {
    margin-right: 5px;
  }
`

interface MenuProps {
  data: Array<{ subMenuName: string }>
}

export const SubMenu: React.FC<MenuProps> = ({ data }) => {
  return (
    <Composition
      as={StyledContainer}
      templateCols="repeat(3, auto)"
      textAlign="center"
      gap={1}
    >
      {data.map((item, key) => (
        <Box as="li" key={key} flex alignItems="flex-end">
          <StyledLink href="#">{item.subMenuName}</StyledLink>
        </Box>
      ))}
    </Composition>
  )
}
