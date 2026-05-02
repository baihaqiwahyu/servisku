import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CekMotor from "./pages/CekMotor";
import DaftarMotor from "./pages/DaftarMotor";
import Tentang from "./pages/Tentang";

function App() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e]">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cek-motor" element={<CekMotor />} />
          <Route path="/daftar-motor" element={<DaftarMotor />} />
          <Route path="/tentang" element={<Tentang />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;