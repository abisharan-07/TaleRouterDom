import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import "./assets/css/animate.css";
import "./assets/css/flex-slider.css";
import "./assets/css/fontawesome.css";
import "./assets/css/owl.css";
import "./assets/css/templatemo-tale-seo-agency.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/faqs"  element={<Faq/>} />
        <Route path="/about_us"  element={<About/>} />
        <Route path="/contact"  element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
