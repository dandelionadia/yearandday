import React from 'react'
import { Composition } from 'atomic-layout'

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
        <li>{item.name}</li>
      ))}
    </Composition>
  )
}
