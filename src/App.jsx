import Layout from "./KOMPONEN/layout/Layout.jsx";
import About from "./KOMPONEN/halaman/about.jsx";
import Kategori from "./KOMPONEN/halaman/Kategori.jsx";
import Home from "./KOMPONEN/halaman/Home.jsx";
import PojokFixie from "./KOMPONEN/halaman/PojokFixie.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Kategori" element={<Kategori />} />
          <Route path="About" element={<About />} />
          <Route path="PojokFixie" element={<PojokFixie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
