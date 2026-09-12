import { Link } from "react-router-dom";
import { Wrench, Code2, Database, Layers3 } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#002B5B] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-4">
          {/* BRAND */}
          <div className="space-y-5 md:col-span-2">
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#002B5B] transition-transform duration-300 group-hover:scale-105">
                <Wrench size={22} />
              </div>

              <span className="text-2xl font-black tracking-tight">
                Servisku
              </span>
            </Link>

            <p className="max-w-lg text-sm leading-7 text-slate-300">
              Aplikasi web untuk membantu pengguna menemukan informasi
              komponen dan interval servis berkala berdasarkan tipe sepeda
              motor.
            </p>

            <p className="max-w-lg text-xs leading-6 text-slate-400">
              Informasi yang ditampilkan bersifat panduan umum. Kondisi dan
              kebutuhan servis setiap kendaraan dapat berbeda.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="mb-5 font-bold text-white">
              Navigasi
            </h4>

            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <Link
                to="/"
                className="w-fit transition hover:text-orange-400"
              >
                Beranda
              </Link>

              <Link
                to="/cek-motor"
                className="w-fit transition hover:text-orange-400"
              >
                Cek Motor
              </Link>

              <Link
                to="/daftar-motor"
                className="w-fit transition hover:text-orange-400"
              >
                Daftar Motor
              </Link>

              <Link
                to="/tentang"
                className="w-fit transition hover:text-orange-400"
              >
                Tentang
              </Link>
            </div>
          </div>

          {/* TECHNOLOGY */}
          <div>
            <h4 className="mb-5 font-bold text-white">
              Teknologi
            </h4>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Code2
                  size={17}
                  className="text-sky-300"
                />
                <span>React + Vite</span>
              </div>

              <div className="flex items-center gap-3">
                <Layers3
                  size={17}
                  className="text-sky-300"
                />
                <span>Tailwind CSS</span>
              </div>

              <div className="flex items-center gap-3">
                <Database
                  size={17}
                  className="text-sky-300"
                />
                <span>Laravel API</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col justify-between gap-4 pt-8 text-sm text-slate-400 md:flex-row md:items-center">
          <p>
            © 2026 Servisku. All rights reserved.
          </p>

          <p>
            Rawat motormu, jaga perjalananmu.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;