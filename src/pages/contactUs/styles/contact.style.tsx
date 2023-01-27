import styled from "styled-components";

export const ContactContainer = styled.div`
  min-height: calc(100vh - 17.5rem);
`;

export const ContactCenter = styled.div`
  width: 95%;
  max-width: 50rem;
  min-height: calc(100vh - 25rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
  overflow-x: hidden;
`;
export const ContactHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;
export const ContactHeaderh1 = styled.h1`
  font-size: 3rem;
`;
export const Contacth3 = styled.h3`
  margin-bottom: 0.5rem;
`;
export const ContactInfoEmail = styled.p`
  margin-bottom: 0.5rem;
`;
export const ContactSpanEmail = styled.span`
  font-weight: bold;
`;
