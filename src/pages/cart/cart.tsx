import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../shop/products';
import { CartItem } from './cartItem';
import {
  CartHeader,
  CartTitleH1,
  CartCenter,
  CartContainer,
  CartItems,
  CartInfoShopping,
  CartSubtotal,
  CartContinueShopping,
  CartCheckout,
  CartIsEmpty,
  CartGoToShop,
} from './styles/cart.style';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

export const Cart = () => {
  const { addToCart, cartItems, removeFromCart, getTotalCartAmount } =
    useContext<any>(ShopContext);

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <CartContainer>
      <CartCenter>
        <CartHeader>
          <CartTitleH1>CART</CartTitleH1>
          <ShoppingCart size={34} />
        </CartHeader>
        <CartItems>
          {PRODUCTS.map(product => {
            if (cartItems[product.id]) {
              return <CartItem data={product} />;
            }
          })}
        </CartItems>
        {totalAmount > 0 ? (
          <CartInfoShopping>
            <CartSubtotal> Subtotal: ${totalAmount}</CartSubtotal>
            <CartContinueShopping onClick={() => navigate('/')}>
              Continue Shopping
            </CartContinueShopping>
            <CartCheckout to="/checkout">Checkout</CartCheckout>
          </CartInfoShopping>
        ) : (
          <CartIsEmpty>
            YOUR CART IS EMPTY{' '}
            <CartGoToShop to="/">&#10094; GO TO SHOP</CartGoToShop>
          </CartIsEmpty>
        )}
      </CartCenter>
    </CartContainer>
  );
};
