import styled from 'styled-components';

export const CartItemProduct = styled.div`
  display: flex;
  padding: 1.5rem;
  height: 12rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 30rem;
  column-gap: 2rem;
  align-items: center;
  border-radius: 1rem;

  @media (max-width: 420px) {
    padding: 1.5rem 1rem;
    flex-direction: column;
    height: 20rem;
    column-gap: 0rem;
    row-gap: 1rem;
  }
`;
export const CartItemImage = styled.img`
  width: 100%;
  height: 100%;
  flex: 30%;
  @media (max-width: 420px) {
    width: 170px;
    height: 170px;
  }
  @media (max-width: 220px) {
    width: 140px;
    height: 140px;
  }
`;

export const CartItemDescription = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 70%;
  @media (max-width: 420px) {
    align-items: center;
  }
`;

export const CartItemName = styled.h3``;
export const CartItemPrice = styled.p``;

export const CartCountHandler = styled.div`
  display: flex;
  column-gap: 0.3rem;
  height: 1.5rem;
`;
export const CartDecreaseCartItem = styled.button`
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0 0.5rem;
  border: 1px solid lightgray;
  width: 1.6rem;
  cursor: pointer;
`;
export const CartIncreaseCartItem = styled.button`
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0 0.5rem;
  border: 1px solid lightgray;
  width: 1.6rem;
  cursor: pointer;
`;
export const CartInputItem = styled.input`
  width: 3rem;
  text-align: center;
`;
