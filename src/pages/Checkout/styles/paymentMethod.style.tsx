import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PaymentContainer = styled.div`
  min-height: calc(100vh - 17.5rem);
`;
export const PaymentCenter = styled.div`
  width: 95%;
  max-width: 500px;
  margin: 5rem auto;
`;
export const PaymentAllInfo = styled.div`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;

  padding: 1rem;
  margin-bottom: 3rem;
`;
export const PaymentSelectPaymentMethodTitle = styled.div`
  font-size: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
  text-decoration: underline;
  cursor: default;
`;
export const PaymentChoose = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-items: center;
  align-items: center;
  border-radius: 0.2rem;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    row-gap: 0.2rem;
  } ;
`;

export const PaymentSingleOption = styled.div`
  display: flex;

  align-items: center;
  cursor: pointer;

  @media (max-width: 180px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const PaymentCreditOrPix = styled.div`
  font-size: 0.8rem;
`;
export const PaymentOptionNameCredit = styled.button`
  font-weight: bold;
  margin-right: 0.5rem;
  border: none;
  width: 100%;
  max-width: 7rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  color: #cdf8cd;
  cursor: pointer;
  color: black;
  background: ${(prop: any) => (prop.value ? '#b1f0b137 ' : 'none')};
`;
export const PaymentOptionNamePix = styled.button`
  font-weight: bold;
  width: 7rem;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  border-radius: 0.3rem;
  background: ${(prop: any) => (prop.value ? 'none' : '#b1f0b137')};

  @media (max-width: 150px) {
    width: 100%;
    max-width: 5rem;
  }
`;
export const PaymentOptionIconCredit = styled.div`
  height: 1rem;
`;
export const PaymentOptionIconPix = styled.div`
  height: 2rem;
`;
export const PaymentCreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PaymentCreditCardBrands = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  font-size: 2rem;
  margin: 1rem auto;
  justify-content: center;
`;
export const PaymentCreditCardBrand = styled.div``;

export const PaymentCreditCardForm = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PaymentCreditCardNumberTitle = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
`;
export const PaymentCreditCardNumber = styled.input`
  padding: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
`;

export const PaymentCreditCardNameTitle = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
`;
export const PaymentCreditCardName = styled.input`
  padding: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
`;

export const PaymentCreditCardExtraInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 370px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;

export const PaymentCreditCardExpirationDateContainer = styled.div``;
export const PaymentCreditCardExpirationDateTitle = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
`;
export const PaymentCreditCardMonthSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 0.2rem;
  margin-right: 1rem;
`;
export const PaymentCreditCardMonthOption = styled.option`
  margin: 0.3rem 0;
`;
export const PaymentCreditCardYearSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 0.2rem;
`;
export const PaymentCreditCardYearOption = styled.option``;

export const PaymentCreditCardCVVContainer = styled.div``;
export const PaymentCreditCardCVVTitle = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
`;
export const PaymentCreditCardCVV = styled.input`
  padding: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 0.2rem;
  width: 5rem;
`;

export const PaymentTotalPriceItems = styled.div`
  margin: 1rem 0;
`;

export const PaymentCreditCardSubmit = styled.button`
  background: #0fe70f;
  border: none;
  padding: 1rem;
  font-size: 1.05rem;
  font-weight: bold;
  border-radius: 0.3rem;

  &:active {
    transform: scale(0.98);
  }
`;
export const PaymentReturnCartLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const PaymentPixContainer = styled.div``;
export const PaymentPixlogoContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
export const PaymentPixlogoImg = styled.img`
  width: 3.5rem;
`;
export const PaymentPixContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  row-gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
`;
export const PaymentCodeCopied = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  max-width: 10rem;

  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;
export const PaymentCodeCopiedTitle = styled.p`
  display: grid;
  place-items: center;
  color: white;
  letter-spacing: 0.02rem;
`;
export const PaymentCodeCopiedIcon = styled.p`
  color: white;
  font-weight: bold;
  letter-spacing: 0.02rem;
  margin-bottom: 0.5rem;
`;
export const PaymentPixTitleP = styled.p``;
export const PaymentPixCode = styled.input`
  background: lightgray;
  color: black;
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: 1px solid darkgray;
  display: flex;
  width: 100%;
  max-width: 300px;
  &:focus {
    outline: none !important;
  }
`;
export const PaymentPixCopyCode = styled.button`
  border: 2px solid #ff6a06;
  padding: 0.5rem;
  background: white;
  color: #ff6a06;
  letter-spacing: 0.02rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;

export const PaymentPixInstructionsTitle = styled.button`
  background: none;
  border: none;
  display: flex;
`;
export const PaymentPixInstructionsIcon = styled.p`
  margin-left: 0.5rem;
`;
export const PaymentInstructionsPixContainer = styled.div`
  margin-top: 1rem;
`;
export const PaymentInstructionsStep = styled.p`
  display: flex;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;
export const PaymentInstructionsStepNumber = styled.p`
  margin-right: 0.5rem;
  width: 1.1rem;
  height: 1.1rem;
  background: lightgray;
  text-align: center;
  font-size: 0.8rem;
  border-radius: 50%;
`;
