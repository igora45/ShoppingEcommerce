import { useState } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Cart } from './pages/cart/cart';
//@ts-ignor
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';
import { ContainerApp } from './styles/app.style';
import { Footer } from './components/footer';
import { Contact } from './pages/contactUs/contact';
import { ShippingPolicy } from './pages/shippingPolicy/shippingPolicy';
import { ReturnPolicy } from './pages/ReturnPolicy/returnPolicy';
import { Checkout } from './pages/Checkout/checkout';
import { PaymentMethod } from './pages/Checkout/paymentMethod';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ContainerApp>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shippingPolicy" element={<ShippingPolicy />} />
            <Route path="/returnPolicy" element={<ReturnPolicy />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/paymentMethod" element={<PaymentMethod />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </ContainerApp>
  );
}

export default App;
