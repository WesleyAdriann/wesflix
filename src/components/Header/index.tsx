import React from 'react';
import { Link } from 'react-router-dom';

import LogoImage from '../../assets/images/logo.png';

import Button from '../Button';

import {
  Menu,
  Logo,
} from './style';

const Header = () => (
  <Menu>
    <Link to='/'>
      <Logo src={LogoImage} alt='Logo Wesflix' />
    </Link>
    <Button
      as  ={Link}
      to  ='/cadastro/video'
      withResponsive
    >
      Novo video
    </Button>
  </Menu>
);

export default Header;
