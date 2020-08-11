import React from "react";
import { Composition, Only } from "atomic-layout";
import { LogoIcon } from "../atoms/LogoIcon";
import { LogoIconMobile } from "../atoms/LogoIconMobile";
import { Bar } from "../components/Bar";
import { Menu } from "../atoms/Menu";
import { SubMenu } from "../atoms/SubMenu";
import { BurgerBtn } from "./BurgerBtn";
import { Grid } from "../atoms/Grid";

const data = [
  {
    name: "Shop",
    subMenuName: "foo 1",
  },
  {
    name: "My Complete Set",
    subMenuName: "foo 2",
  },
  {
    name: "About",
    subMenuName: "foo 3",
  },
];

const areasMobile = `
  menu logo bar
  / 1fr auto 1fr
`;

const areasLg = `
  menu logo bar
  / auto 1fr 1fr
`;

interface propsState {
  data: any;
  loading: boolean;
}

export const Header: React.FC = () => {
  return (
    <Grid>
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
                <BurgerBtn />
              </Only>
              <Only from="lg">
                <Menu data={data} />
              </Only>
            </Areas.Menu>
            <Areas.Logo justify="center">
              <Only from="md" flex alig="center">
                <LogoIcon />
              </Only>
              <Only to="md" flex alig="center">
                <LogoIconMobile />
              </Only>
            </Areas.Logo>
            <Areas.Bar flex justify="flex-end">
              <Bar />
            </Areas.Bar>
          </>
        )}
      </Composition>
    </Grid>
  );
};
