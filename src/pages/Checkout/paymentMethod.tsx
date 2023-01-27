import {
  PaymentCenter,
  PaymentChoose,
  PaymentContainer,
  PaymentCreditCardBrand,
  PaymentCreditCardBrands,
  PaymentCreditCardContainer,
  PaymentCreditCardCVV,
  PaymentCreditCardCVVContainer,
  PaymentCreditCardCVVTitle,
  PaymentCreditCardExpirationDateContainer,
  PaymentCreditCardExpirationDateTitle,
  PaymentCreditCardExtraInfoContainer,
  PaymentCreditCardForm,
  PaymentCreditCardMonthOption,
  PaymentCreditCardMonthSelect,
  PaymentCreditCardName,
  PaymentCreditCardNameTitle,
  PaymentCreditCardNumber,
  PaymentCreditCardNumberTitle,
  PaymentCreditCardYearSelect,
  PaymentCreditCardYearOption,
  PaymentOptionIconCredit,
  PaymentOptionNameCredit,
  PaymentSingleOption,
  PaymentCreditCardSubmit,
  PaymentAllInfo,
  PaymentSelectPaymentMethodTitle,
  PaymentReturnCartLink,
  PaymentTotalPriceItems,
  PaymentPixContainer,
  PaymentOptionNamePix,
  PaymentCreditOrPix,
  PaymentPixlogoContainer,
  PaymentPixlogoImg,
  PaymentPixContentContainer,
  PaymentPixTitleP,
  PaymentPixCode,
  PaymentPixCopyCode,
  PaymentPixInstructionsTitle,
  PaymentInstructionsPixContainer,
  PaymentInstructionsStep,
  PaymentInstructionsStepNumber,
  PaymentPixInstructionsIcon,
  PaymentCodeCopied,
  PaymentCodeCopiedTitle,
  PaymentCodeCopiedIcon,
} from './styles/paymentMethod.style';
import {
  FaCreditCard,
  FaCcVisa,
  FaCcMastercard,
  FaCcJcb,
  FaCcStripe,
  FaAngleDown,
  FaAngleUp,
  FaCheckCircle,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/shop-context';
import { useContext, useState } from 'react';
import LogoImgPix from '../../assets/pix-logo.png';

export const PaymentMethod = () => {
  const { addToCart, cartItems, removeFromCart, getTotalCartAmount } =
    useContext<any>(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState<Boolean>(true);
  const [instructionsPix, setInstructionsPix] = useState<boolean>(false);
  const [codeCopied, setCodeCopied] = useState(false);
  const [inputPixCode, setInputPixCode] = useState(
    '00020101021126580014br.gov.bcb.pix013689f5654f-8a23-4ebf-a85f-a028be9f1083520400005303986540522.735802BR5906Shopee6009SAO PAULO6225052116e669bd167461322680063045E8D'
  );
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const CopyPixCode = () => {
    navigator.clipboard.writeText(inputPixCode);
    setCodeCopied(true);
    setTimeout(() => {
      setCodeCopied(false);
    }, 2000);
  };
  return (
    <PaymentContainer>
      <PaymentCenter>
        <PaymentAllInfo>
          <PaymentSelectPaymentMethodTitle>
            Select your payment method
          </PaymentSelectPaymentMethodTitle>
          <PaymentChoose>
            <PaymentSingleOption>
              <PaymentOptionNameCredit
                value={paymentMethod}
                onClick={() => setPaymentMethod(true)}
              >
                CREDIT CARD
              </PaymentOptionNameCredit>
              <PaymentOptionIconCredit>
                <FaCreditCard size={18} />
              </PaymentOptionIconCredit>
            </PaymentSingleOption>
            <PaymentCreditOrPix>or</PaymentCreditOrPix>
            <PaymentSingleOption>
              <PaymentOptionNamePix
                value={paymentMethod}
                onClick={() => setPaymentMethod(false)}
              >
                PIX
              </PaymentOptionNamePix>
            </PaymentSingleOption>
          </PaymentChoose>
          {paymentMethod ? (
            <PaymentCreditCardContainer>
              <PaymentCreditCardBrands>
                <PaymentCreditCardBrand>
                  <FaCcVisa color="orange" />
                </PaymentCreditCardBrand>
                <PaymentCreditCardBrand>
                  <FaCcMastercard color="orangered" />
                </PaymentCreditCardBrand>
                <PaymentCreditCardBrand>
                  <FaCcJcb color="blue" />
                </PaymentCreditCardBrand>
                <PaymentCreditCardBrand>
                  <FaCcStripe color="purple" />
                </PaymentCreditCardBrand>
              </PaymentCreditCardBrands>

              <PaymentCreditCardForm>
                <PaymentCreditCardNumberTitle>
                  Card number
                </PaymentCreditCardNumberTitle>
                <PaymentCreditCardNumber type="number"></PaymentCreditCardNumber>
                <PaymentCreditCardNameTitle>
                  Card Holder Name
                </PaymentCreditCardNameTitle>
                <PaymentCreditCardName type="text"></PaymentCreditCardName>

                <PaymentCreditCardExtraInfoContainer>
                  <PaymentCreditCardExpirationDateContainer>
                    <PaymentCreditCardExpirationDateTitle>
                      Expiration Date
                    </PaymentCreditCardExpirationDateTitle>
                    <PaymentCreditCardMonthSelect>
                      <PaymentCreditCardMonthOption value="0">
                        Month
                      </PaymentCreditCardMonthOption>
                      <PaymentCreditCardMonthOption value="1">
                        01
                      </PaymentCreditCardMonthOption>
                      <PaymentCreditCardMonthOption value="2">
                        02
                      </PaymentCreditCardMonthOption>
                      <PaymentCreditCardMonthOption value="3">
                        03
                      </PaymentCreditCardMonthOption>
                      <PaymentCreditCardMonthOption value="3">
                        04
                      </PaymentCreditCardMonthOption>
                      <PaymentCreditCardMonthOption value="3">
                        05
                      </PaymentCreditCardMonthOption>
                      <PaymentCreditCardMonthOption value="3">
                        06
                      </PaymentCreditCardMonthOption>
                      <PaymentCreditCardMonthOption value="3">
                        07
                      </PaymentCreditCardMonthOption>
                      <PaymentCreditCardMonthOption value="3">
                        08
                      </PaymentCreditCardMonthOption>
                      <PaymentCreditCardMonthOption value="3">
                        09
                      </PaymentCreditCardMonthOption>
                      <PaymentCreditCardMonthOption value="3">
                        10
                      </PaymentCreditCardMonthOption>
                      <PaymentCreditCardMonthOption value="3">
                        11
                      </PaymentCreditCardMonthOption>
                      <PaymentCreditCardMonthOption value="3">
                        12
                      </PaymentCreditCardMonthOption>
                    </PaymentCreditCardMonthSelect>
                    <PaymentCreditCardYearSelect>
                      <PaymentCreditCardYearOption value="">
                        Year
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2023">
                        2023
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2024">
                        2024
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2025">
                        2025
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2026">
                        2026
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2027">
                        2027
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2028">
                        2028
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2029">
                        2029
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2030">
                        2030
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2031">
                        2031
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2032">
                        2032
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2033">
                        2033
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2034">
                        2034
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2035">
                        2035
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2036">
                        2036
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2037">
                        2037
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2038">
                        2038
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2039">
                        2039
                      </PaymentCreditCardYearOption>
                      <PaymentCreditCardYearOption value="2040">
                        2040
                      </PaymentCreditCardYearOption>
                    </PaymentCreditCardYearSelect>
                  </PaymentCreditCardExpirationDateContainer>

                  <PaymentCreditCardCVVContainer>
                    <PaymentCreditCardCVVTitle>
                      CVV (Security Code)
                    </PaymentCreditCardCVVTitle>
                    <PaymentCreditCardCVV type="number"></PaymentCreditCardCVV>
                  </PaymentCreditCardCVVContainer>
                </PaymentCreditCardExtraInfoContainer>
                <PaymentTotalPriceItems>
                  Subtotal: ${totalAmount}
                </PaymentTotalPriceItems>
                <PaymentCreditCardSubmit>
                  Confirm Payment
                </PaymentCreditCardSubmit>
              </PaymentCreditCardForm>
            </PaymentCreditCardContainer>
          ) : (
            <PaymentPixContainer>
              <PaymentPixlogoContainer>
                <PaymentPixlogoImg src={LogoImgPix}></PaymentPixlogoImg>
                <PaymentTotalPriceItems>
                  Subtotal: ${totalAmount}
                </PaymentTotalPriceItems>
              </PaymentPixlogoContainer>
              <PaymentPixContentContainer>
                {codeCopied ? (
                  <PaymentCodeCopied>
                    <PaymentCodeCopiedTitle>
                      <PaymentCodeCopiedIcon>
                        <FaCheckCircle size={25} />
                      </PaymentCodeCopiedIcon>
                      Pix Code Copied!
                    </PaymentCodeCopiedTitle>
                  </PaymentCodeCopied>
                ) : (
                  ''
                )}

                <PaymentPixTitleP>Pix Code</PaymentPixTitleP>
                <PaymentPixCode value={inputPixCode}></PaymentPixCode>
                <PaymentPixCopyCode onClick={CopyPixCode}>
                  Copy Pix Code
                </PaymentPixCopyCode>
              </PaymentPixContentContainer>
              <PaymentPixInstructionsTitle
                onClick={() => {
                  setInstructionsPix(!instructionsPix);
                }}
              >
                How to Pay with Pix?
                <PaymentPixInstructionsIcon>
                  {instructionsPix ? <FaAngleUp /> : <FaAngleDown />}
                </PaymentPixInstructionsIcon>
              </PaymentPixInstructionsTitle>
              {instructionsPix ? (
                <PaymentInstructionsPixContainer>
                  <PaymentInstructionsStep>
                    <PaymentInstructionsStepNumber>
                      1
                    </PaymentInstructionsStepNumber>
                    Copy the code above.
                  </PaymentInstructionsStep>
                  <PaymentInstructionsStep>
                    <PaymentInstructionsStepNumber>
                      2
                    </PaymentInstructionsStepNumber>
                    Access your bank app.
                  </PaymentInstructionsStep>
                  <PaymentInstructionsStep>
                    <PaymentInstructionsStepNumber>
                      3
                    </PaymentInstructionsStepNumber>
                    Choose to pay with Pix, and Paste the code and finish the
                    Payment.
                  </PaymentInstructionsStep>
                  <PaymentInstructionsStep>
                    <PaymentInstructionsStepNumber>
                      4
                    </PaymentInstructionsStepNumber>
                    Your payment will be approved in a few seconds.
                  </PaymentInstructionsStep>
                </PaymentInstructionsPixContainer>
              ) : (
                ''
              )}
            </PaymentPixContainer>
          )}
        </PaymentAllInfo>
        <PaymentReturnCartLink to="/checkout">
          &#10094; Return to Your Informations
        </PaymentReturnCartLink>
      </PaymentCenter>
    </PaymentContainer>
  );
};
