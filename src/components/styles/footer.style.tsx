import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background: black;
  height: 13rem;
  display: flex;
  place-items: center;
`;
export const FooterContent = styled.div`
  width: 90%;
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
`;
export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const FooterLink = styled.a`
  font-size: 1.6rem;
  cursor: pointer;
  color: white;

  &:hover {
    color: darkgray;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const FooterCopyright = styled.p`
  font-size: 0.85rem;
  color: darkgray;
`;
export const FooterAllLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;
export const FooterHelph3 = styled.h4`
  color: lightgray;
  margin-bottom: 0.3rem;
`;
export const FooterAboutSiteLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const FooterAboutSiteLink = styled(Link)`
  color: lightgray;
  text-decoration: none;
  margin-bottom: 0.15rem;
  &:hover {
    color: darkgray;
  }
`;
