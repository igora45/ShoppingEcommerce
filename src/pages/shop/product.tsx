import { useContext, useState } from 'react';
import { ShopContext } from '../../context/shop-context';
import {
  ShopAddToCart,
  ShopInfoImage,
  ShopProductDescription,
  ShopProductImg,
  ShopProductName,
  ShopProductPrice,
  ShopSingleProduct,
} from './styles/product.style';

export const Product = (props: any) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext<any>(ShopContext);
  const cartItemAmount = cartItems[id];

  const [productHover, setProductHover] = useState(false);

  return (
    <ShopSingleProduct
      productHover={productHover}
      setProductHover={setProductHover}
      onMouseEnter={() => setProductHover(true)}
      onMouseLeave={() => setProductHover(false)}
    >
      <ShopProductImg
        src={productImage}
        productHover={productHover}
      ></ShopProductImg>
      <ShopProductDescription>
        <ShopProductName productHover={productHover}>
          {productName}
        </ShopProductName>
        <ShopProductPrice>${price}</ShopProductPrice>
        <ShopAddToCart onClick={() => addToCart(id)}>
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </ShopAddToCart>
      </ShopProductDescription>
    </ShopSingleProduct>
  );
};
