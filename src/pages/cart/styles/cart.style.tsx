import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartContainer = styled.div`
  min-height: calc(100vh - 17.5rem);
`;
export const CartCenter = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  overflow-x: hidden; ;
`;
export const CartHeader = styled.div`
  margin: 4rem 0;
  display: flex;
  align-items: center;
`;
export const CartTitleH1 = styled.h1`
  margin-right: 1rem;
  font-size: 2.5rem;
`;
export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  row-gap: 2rem;
`;

export const CartInfoShopping = styled.div`
  width: 96%;
  max-width: 20rem;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  grid-template-areas:
    'a a'
    'b c';
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 4rem;

  @media (max-width: 331px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      'a'
      'b'
      'c';
  }
`;
export const CartSubtotal = styled.p`
  grid-area: a;
`;
export const CartContinueShopping = styled.button`
  grid-area: b;
  padding: 0.5rem 1rem;
  background: black;
  color: white;
  border-radius: 0.3rem;
  &:active {
    transform: scale(0.98);
  }
`;
export const CartCheckout = styled(Link)`
  grid-area: c;
  padding: 0.5rem 1rem;
  background: black;
  color: white;
  border-radius: 0.3rem;
  text-decoration: none;
  &:active {
    transform: scale(0.98);
  }
`;
export const CartIsEmpty = styled.h2`
  display: grid;
  align-items: center;
  margin-top: 5rem;
  color: #525252;
  text-align: center;
`;
export const CartGoToShop = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  margin-top: 1rem;
`;
