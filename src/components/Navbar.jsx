import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class="bg-gradient-to-r from-mainGradientStart to-mainGradientEnd text-white px-6 py-4 shadow-lg">
      <div class="container mx-auto flex justify-between">
        <h1 class="font-bold text-xl">Portfolio Muslihan</h1>
        <ul class="flex gap-4">
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/profil">Profil</Link></li>
          <li><Link to="/penelitian">Penelitian</Link></li>
          <li><Link to="/jurnal">Jurnal</Link></li>
          <li><Link to="/pengabdian">Pengabdian</Link></li>
          <li><Link to="/galeri">Galeri</Link></li>
          <li><Link to="/kontak">Kontak</Link></li>
        </ul>
      </div>
    </nav>
  );
}
