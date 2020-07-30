import React from 'react';

import LogoImage from '../../assets/images/logo.png';

import {
  Menu,
  Logo,
  ButtonLink,
} from './style';

const Header = () => (
  <Menu>
    <Logo src={LogoImage} alt='Logo Wesflix' />
    <ButtonLink>
      Novo video
    </ButtonLink>
  </Menu>
);

export default Header;
