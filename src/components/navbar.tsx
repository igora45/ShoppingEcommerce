import React from 'react';
import {
  ContainerNavbar,
  NavCenter,
  NavLinks,
  NavLogoContainer,
  NavLogoImg,
  SingleLink,
} from './styles/navbar.style';
import { ShoppingCart } from 'phosphor-react';
import LogoNavImg from '../assets/logo-shop-white.jpg';

export const Navbar = () => {
  return (
    <ContainerNavbar>
      <NavCenter>
        <NavLogoContainer to="/">
          <NavLogoImg src={LogoNavImg}></NavLogoImg>
        </NavLogoContainer>
        <NavLinks>
          <SingleLink to="/">Shop</SingleLink>
          <SingleLink to="/cart">
            <ShoppingCart size={30} />
          </SingleLink>
        </NavLinks>
      </NavCenter>
    </ContainerNavbar>
  );
};
