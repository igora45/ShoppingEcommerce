import {
  CheckoutButtons,
  CheckoutCenter,
  CheckoutContactInfo,
  CheckoutContainer,
  CheckoutErrorMessage,
  CheckoutForm,
  CheckoutHeader,
  CheckoutHeaderh2,
  CheckoutInput,
  CheckoutReturnToCart,
  CheckoutShippingInfo,
  CheckoutSubmit,
} from './styles/checkout.styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface InputsType {
  email: string;
  name: string;
  lastName: string;
  postalCode: number;
  adress01: string;
  adress02: string;
  city: string;
}
export const Checkout = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required('Enter an email'),
    name: yup.string().required(),
    lastName: yup.string().required(),
    postalCode: yup.number().min(5).max(8),
    adress01: yup.string().required(),
    adress02: yup.string().required(),
    city: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>({ resolver: yupResolver(schema) });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const submitForm = (e: any) => {
    e.preventDefault();
    const navigate = useNavigate();
    navigate('/cart');
  };

  return (
    <CheckoutContainer>
      <CheckoutCenter>
        <CheckoutHeader>
          <CheckoutHeaderh2>Enter Your Informations</CheckoutHeaderh2>
        </CheckoutHeader>
        <CheckoutForm onSubmit={() => handleSubmit(onSubmit)}>
          <CheckoutContactInfo>Contact Information</CheckoutContactInfo>
          <CheckoutInput
            type="text"
            placeholder="Email"
            {...register('email')}
          ></CheckoutInput>
          <CheckoutShippingInfo>Shipping Adress</CheckoutShippingInfo>
          <CheckoutInput
            type="text"
            placeholder="Name"
            required
            {...register('name')}
          ></CheckoutInput>
          <CheckoutInput
            type="text"
            placeholder="Last Name"
            {...register('lastName')}
          ></CheckoutInput>
          <CheckoutInput
            type="number"
            placeholder="Postal code"
            {...register('postalCode')}
          ></CheckoutInput>
          <CheckoutInput
            type="text"
            placeholder="Adress 1"
            {...register('adress01')}
          ></CheckoutInput>
          <CheckoutInput
            type="text"
            placeholder="Adress 2"
            {...register('adress02')}
          ></CheckoutInput>
          <CheckoutInput
            type="text"
            placeholder="City"
            {...register('city')}
          ></CheckoutInput>
          <CheckoutButtons>
            <CheckoutReturnToCart to="/cart">
              &#10094; Return to Cart
            </CheckoutReturnToCart>
            <CheckoutSubmit to="/paymentMethod">Continue</CheckoutSubmit>
          </CheckoutButtons>
        </CheckoutForm>
      </CheckoutCenter>
    </CheckoutContainer>
  );
};
