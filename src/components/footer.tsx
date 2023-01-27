import {
  FooterAboutSiteLink,
  FooterAboutSiteLinks,
  FooterAllLinks,
  FooterContainer,
  FooterContent,
  FooterCopyright,
  FooterHelph3,
  FooterLink,
  FooterLinks,
} from "./styles/footer.style";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterAllLinks>
          <FooterAboutSiteLinks>
            <FooterHelph3>HELP</FooterHelph3>
            <FooterAboutSiteLink to="/contact">Contact US</FooterAboutSiteLink>
            <FooterAboutSiteLink to="/ShippingPolicy">
              Shipping Policy
            </FooterAboutSiteLink>
            <FooterAboutSiteLink to="/returnPolicy">
              Return Policy
            </FooterAboutSiteLink>
          </FooterAboutSiteLinks>
          <FooterLinks>
            <FooterLink href="https://github.com/igora45" target="_blank">
              <FaGithub />
            </FooterLink>
            <FooterLink
              href="https://www.instagram.com/ygaaaoo/"
              target="_blank"
            >
              <FaInstagram />
            </FooterLink>
            <FooterLink
              href="https://www.linkedin.com/in/igor-macedo-1b9558239/"
              target="_blank"
            >
              <FaLinkedin />
            </FooterLink>
          </FooterLinks>
        </FooterAllLinks>
        <FooterCopyright>
          &copy; 2023 Copyright by Igor Carvalho. All Rights Reserved.
        </FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
};
