import CartProvider from "./contexts/CartContext";
import About from "./pages/about";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import PracticePage from "./pages/practice";
import ProductPage from "./pages/product";
import ProductsPage from "./pages/products";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
