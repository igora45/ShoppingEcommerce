import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopSingleProduct = styled.div`
  width: 100%;
  max-width: 300px;
  height: 425px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const ShopProductDescription = styled.div`
  text-align: center;
`;
export const ShopInfoImage = styled(Link)``;
export const ShopProductImg = styled.img`
  width: 250px;
  height: 250px;
  opacity: ${(prop) => (prop.productHover ? "0.7" : "1")};
  @media (max-width: 254px) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: 600px) {
    width: 300px;
    height: 300px;
  }
`;
export const ShopProductName = styled.p`
  font-weight: bold;
  text-decoration: ${(prop) => (prop.productHover ? "underline" : "none")};
  font-size: 1.2rem;
`;
export const ShopProductPrice = styled.p``;

export const ShopAddToCart = styled.button`
  margin-top: 1rem;
  border: 2px solid black;
  padding: 0.3rem 1rem;
  background: white;
  border-radius: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: black;
    color: white;
  }
  &:active {
    transform: scale(0.95);
  }
`;
