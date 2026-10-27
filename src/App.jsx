import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Order from "./order";
import Services from "./services";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="routes">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/order" element={<Order />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
