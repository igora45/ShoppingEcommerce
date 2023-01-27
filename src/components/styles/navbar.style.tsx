import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerNavbar = styled.div`
  height: 4.5rem;
  background: black;
`;
export const NavCenter = styled.div`
  width: 95%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  place-items: center;
  justify-content: space-between;
  @media (max-width: 370px) {
    justify-content: end;
  }
`;
export const NavLogoContainer = styled(Link)`
  margin-left: 1rem;
  @media (max-width: 370px) {
    display: none;
  }
`;
export const NavLogoImg = styled.img`
  width: 10rem;
`;
export const NavLinks = styled.div`
  display: flex;
  column-gap: 1rem;
`;

export const SingleLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
`;
