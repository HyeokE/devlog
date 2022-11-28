import React from 'react';

import { useRouter } from 'next/router';

import MenuIcon from '../../../assets/MenuToggleIcon';
import SideMenu from '../../common/SideMenu';
import ThemeButton from '../ThemeButton';

import NavigationLogo from './NavigationLogo';
import { NavigationProps } from './props';
import {
  ButtonWrapper,
  MenuButtonWrapper,
  NavInner,
  NavLogoContainer,
  NavLogoContainerInner,
  NavWrapper,
} from './styled';

export type NavigationRoutes = Array<{
  route: string;
  title: string;
}>;

const Navigation = ({
  routes,
  title,
  customLogo,
  themeButton = true,
  pointColor = 'blue900',
  menuButton = 'none',
  sideMenu,
  rightElement,
  toggleMenu,
  isMenuOpen = false,
}: NavigationProps) => {
  const router = useRouter();

  const menuHandler = () => {
    toggleMenu && toggleMenu();
  };

  return (
    <NavWrapper>
      <NavLogoContainer>
        <NavLogoContainerInner>
          {(menuButton === 'left' || menuButton === 'left-mobile-only') && (
            <MenuButtonWrapper position={menuButton} onClick={menuHandler}>
              <MenuIcon isMenuOpen={isMenuOpen} />
            </MenuButtonWrapper>
          )}
          <NavigationLogo
            title={title}
            onClick={() => router.push('/')}
            customLogo={customLogo}
            pointColor={pointColor}
          />
        </NavLogoContainerInner>
      </NavLogoContainer>
      <NavInner>
        <ButtonWrapper>
          {rightElement && <>{rightElement}</>}
          {themeButton && <ThemeButton />}
          {(menuButton === 'right' || menuButton === 'right-mobile-only') && (
            <MenuButtonWrapper position={menuButton} onClick={menuHandler}>
              <MenuIcon isMenuOpen={isMenuOpen} />
            </MenuButtonWrapper>
          )}
        </ButtonWrapper>
      </NavInner>
      {/* eslint-disable-next-line react/no-children-prop */}
      <SideMenu isMenuOpen={isMenuOpen} children={sideMenu} />
    </NavWrapper>
  );
};

export default Navigation;
