import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import {
  CartCountHandler,
  CartDecreaseCartItem,
  CartIncreaseCartItem,
  CartInputItem,
  CartItemDescription,
  CartItemImage,
  CartItemName,
  CartItemPrice,
  CartItemProduct,
} from './styles/cartItem.style';

export const CartItem = (props: any) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext<any>(ShopContext);
  return (
    <CartItemProduct>
      <CartItemImage src={productImage}></CartItemImage>
      <CartItemDescription>
        <CartItemName>{productName}</CartItemName>
        <CartItemPrice>${price}</CartItemPrice>
        <CartCountHandler>
          <CartDecreaseCartItem onClick={() => removeFromCart(id)}>
            -
          </CartDecreaseCartItem>
          <CartInputItem
            value={cartItems[id]}
            onChange={e => updateCartItemCount(Number(e.target.value), id)}
          ></CartInputItem>
          <CartIncreaseCartItem onClick={() => addToCart(id)}>
            +
          </CartIncreaseCartItem>
        </CartCountHandler>
      </CartItemDescription>
    </CartItemProduct>
  );
};
