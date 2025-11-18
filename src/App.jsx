import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Penelitian from './pages/Penelitian';
import Jurnal from './pages/Jurnal';
import Pengabdian from './pages/Pengabdian';
import Galeri from './pages/Galeri';
import Kontak from './pages/Kontak';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/penelitian" element={<Penelitian />} />
        <Route path="/jurnal" element={<Jurnal />} />
        <Route path="/pengabdian" element={<Pengabdian />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </Router>
  );
}
