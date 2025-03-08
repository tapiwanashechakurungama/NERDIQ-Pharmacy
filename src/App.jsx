import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Prescriptions from "./pages/Prescriptions";
import { NavbarComponent } from "./components/Navbar";
import Contact from "./pages/Contact";
import { Footer } from "./components/Footer";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-[100vh] flex justify-center items-center ">
          <RingLoader />
        </div>
      ) : (
        <BrowserRouter>
          <NavbarComponent></NavbarComponent>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/prescriptions" element={<Prescriptions />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
