import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CheckoutContainer = styled.div`
  min-height: calc(100vh - 17.5rem);
`;
export const CheckoutCenter = styled.div`
  width: 95%;
  max-width: 500px;
  margin: 0 auto;
`;
export const CheckoutHeader = styled.div`
  padding: 3rem 0;
  overflow-x: hidden;
`;
export const CheckoutHeaderh2 = styled.h2``;

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const CheckoutContactInfo = styled.p`
  font-size: 1.05rem;
`;
export const CheckoutShippingInfo = styled.p`
  margin-top: 0.3rem;
  font-size: 1.05rem;
`;
export const CheckoutInput = styled.input`
  padding: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 0.2rem;
  margin: 0.3rem 0;
  &:focus {
    outline: none !important;
  }
`;
export const CheckoutErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  height: 1rem;
`;

export const CheckoutButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  @media (max-width: 300px) {
    flex-direction: column;
    row-gap: 1.5rem;
    margin: 2rem 0;
  }
`;
export const CheckoutSubmit = styled(Link)`
  padding: 0.8rem 2rem;
  background: black;
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  text-decoration: none;

  &:active {
    transform: scale(0.98);
  }
  @media (max-width: 300px) {
    order: 1;
  }
`;
export const CheckoutReturnToCart = styled(Link)`
  background: none;
  border: none;
  margin-left: 0.3rem;
  text-decoration: none;
  color: black;

  @media (max-width: 300px) {
    order: 2;
  }
`;
