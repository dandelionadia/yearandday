import React from 'react'
import { Composition, Only } from 'atomic-layout'
import styled from 'styled-components'
import { LogoIcon } from '../atoms/LogoIcon'
import { LogoIconMobile } from '../atoms/LogoIconMobile'
import { Bar } from '../components/Bar'
import { Menu } from '../atoms/Menu'

const data = [
  {
    name: 'Shop',
  },
  {
    name: 'My Complete Set',
  },
  {
    name: 'About',
  },
]

const areasMobile = `
  menu logo bar
  / 1fr auto 1fr
`

const areasLg = `
  menu logo bar
  / 1fr 1fr 1fr
`

const StyledLogo = styled(LogoIcon)``

const StyledLogoMobile = styled(LogoIconMobile)``

export const Header: React.FC = () => {
  return (
    <Composition
      template={areasMobile}
      templateLg={areasLg}
      paddingVertical={1.3}
      gap={1}
      gapMd={2}
      alignItems="center"
    >
      {(Areas) => (
        <>
          <Areas.Menu>
            <Only to="lg">
              <span>=</span>
            </Only>
            <Only from="lg">
              <Menu data={data} />
            </Only>
          </Areas.Menu>
          <Areas.Logo justify="center">
            <Only from="md">
              <StyledLogo />
            </Only>
            <Only to="md">
              <StyledLogoMobile />
            </Only>
          </Areas.Logo>
          <Areas.Bar flex justify="flex-end">
            <Bar />
          </Areas.Bar>
        </>
      )}
    </Composition>
  )
}
