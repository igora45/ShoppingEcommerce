import {
  ShopCenter,
  ShopContainer,
  ShopLogo,
  ShopHeader,
  ShopProducts,
} from './styles/shop.style';
import { PRODUCTS } from './products';
import { Product } from './product';
import Logo from '../../assets/logo-shop.jpg';
import { useState } from 'react';

export const Shop = ({ PRODUCTS: any }: any) => {
  const [ig, setig] = useState(0);
  return (
    <ShopContainer>
      <ShopCenter>
        <ShopHeader>
          <ShopLogo src={Logo}></ShopLogo>
        </ShopHeader>
        <ShopProducts>
          {PRODUCTS.map((product: any) => (
            <Product data={product} asdiofj={ig} />
          ))}
        </ShopProducts>
      </ShopCenter>
    </ShopContainer>
  );
};
