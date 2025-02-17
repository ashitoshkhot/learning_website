import "./App.css";
import Features from "./Pages/Features";
import Gallery from "./Pages/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Service from "./Pages/Service";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Blog from "./Pages/Blog";
import CertificatePage from "./Pages/CertificatePage";
import Footer from "./Pages/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="features" element={<Features />} />
        <Route path="service" element={<Service />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/certificatePage" element={<CertificatePage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
