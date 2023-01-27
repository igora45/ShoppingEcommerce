import {
  ContactCenter,
  ContactContainer,
  Contacth3,
  ContactHeader,
  ContactHeaderh1,
  ContactInfoEmail,
  ContactSpanEmail,
} from "./styles/contact.style";

export const Contact = () => {
  return (
    <ContactContainer>
      <ContactCenter>
        <ContactHeader>
          <ContactHeaderh1>Contact Us</ContactHeaderh1>
        </ContactHeader>
        <Contacth3>CONTACT US</Contacth3>
        <ContactInfoEmail>
          For any concerns/questions, send us an email at
          <ContactSpanEmail> shopecommerce@gmail.com</ContactSpanEmail>
        </ContactInfoEmail>
        <ContactInfoEmail>We're always happy to help!</ContactInfoEmail>
      </ContactCenter>
    </ContactContainer>
  );
};
