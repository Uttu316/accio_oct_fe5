import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import PracticePage from "./pages/practice";
import ProductPage from "./pages/product";
import ProductsPage from "./pages/products";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
