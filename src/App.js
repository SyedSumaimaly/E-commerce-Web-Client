import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Nav from './layout/Nav';
import Home from './components/Home';
import Copyright from './layout/Copyright';
import Category from './components/Category';
import Cart from './components/Cart';
import Payment from './components/Payment';
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/product-detail" element={<ProductDetail />} />

        </Routes>
      </BrowserRouter>
      <Copyright/>
    </>
  );
}

export default App;
