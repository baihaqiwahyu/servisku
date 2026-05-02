import { Link } from "react-router-dom";
import { Wrench, Globe, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#002B5B] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-4">
          <div className="space-y-5 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#002B5B]">
                <Wrench size={22} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Servisku
              </span>
            </div>

            <p className="text-sm leading-7 text-slate-300">
              Platform digital sederhana untuk membantu pengguna memahami
              estimasi kebutuhan servis motor secara mudah dan visual.
            </p>

            <div className="flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                <Globe size={18} />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                <Mail size={18} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-bold">Menu Utama</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <Link to="/" className="hover:text-orange-400">
                Beranda
              </Link>
              <Link to="/cek-motor" className="hover:text-orange-400">
                Cek Motor
              </Link>
              <Link to="/daftar-motor" className="hover:text-orange-400">
                Daftar Motor
              </Link>
              <Link to="/tentang" className="hover:text-orange-400">
                Tentang Kami
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-bold">Informasi</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <span>Estimasi Servis</span>
              <span>Komponen Motor</span>
              <span>Tips Perawatan</span>
              <span>Bantuan</span>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-bold">Teknologi</h4>
            <p className="text-sm leading-7 text-slate-300">
              Dibuat menggunakan React, Vite, Tailwind CSS, dan Lucide Icons.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-8 text-sm text-slate-400 md:flex-row">
          <p>© 2026 Servisku. Made with React & Tailwind CSS.</p>
          <p>Rawat motormu, amankan perjalananmu.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;