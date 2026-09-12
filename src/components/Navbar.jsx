import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Wrench } from "lucide-react";

const navItems = [
  { label: "Beranda", path: "/" },
  { label: "Cek Motor", path: "/cek-motor" },
  { label: "Daftar Motor", path: "/daftar-motor" },
  { label: "Tentang Kami", path: "/tentang" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors ${
      isActive
        ? "text-orange-500"
        : "text-slate-600 hover:text-orange-500"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/85 backdrop-blur-xl shadow-[0_10px_40px_-25px_rgba(0,43,91,0.25)]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* BRAND */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-lg shadow-blue-950/20 transition-transform duration-300 group-hover:scale-105">
            <Wrench size={22} />
          </div>

          <span className="text-2xl font-black tracking-tight text-[#002B5B]">
            Servisku
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={navClass}
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}

                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-orange-500" />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <Link
          to="/cek-motor"
          className="hidden rounded-full bg-[#002B5B] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition-all hover:-translate-y-0.5 hover:bg-orange-500 md:inline-flex"
        >
          Cek Sekarang
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-[#002B5B] transition hover:border-sky-200 hover:bg-sky-50 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-bold transition ${
                    isActive
                      ? "bg-orange-50 text-orange-500"
                      : "text-slate-600 hover:bg-slate-50 hover:text-orange-500"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/cek-motor"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-2xl bg-[#002B5B] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-orange-500"
            >
              Cek Sekarang
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;