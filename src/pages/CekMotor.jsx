import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  Bike,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";

import { getMotorcycles } from "../services/api";

function CekMotor() {
  const [searchParams] = useSearchParams();

  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [motors, setMotors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getMotorcycles(query);

        if (!ignore) {
          setMotors(data);
        }
      } catch {
        if (!ignore) {
          setError("Gagal mengambil data motor dari server.");
          setMotors([]);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }, 400);

    return () => {
      ignore = true;
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <section className="min-h-screen bg-[#f7f9fb]">
      {/* HERO */}
      <div className="relative overflow-hidden bg-[#002B5B] px-6 py-20 text-white">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-sky-100">
              <Sparkles size={17} />
              Cek Motor
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Cari Motor dan Temukan Jadwal Servisnya
            </h1>

            <p className="mt-5 max-w-2xl leading-8 text-sky-100">
              Cari tipe motor yang kamu gunakan, kemudian lihat informasi
              komponen dan interval servis berkala secara lengkap.
            </p>

            {/* SEARCH */}
            <div className="mt-10 rounded-[2rem] bg-white/10 p-3 backdrop-blur-xl">
              <div className="relative">
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={22}
                />

                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari Honda Beat, Vario, NMAX..."
                  className="h-16 w-full rounded-[1.5rem] border-0 bg-white pl-14 pr-5 text-[#002B5B] outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-sky-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">
            Hasil Pencarian
          </p>

          <div className="mt-2 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-black text-[#002B5B]">
                {query
                  ? `Motor dengan kata kunci "${query}"`
                  : "Semua Motor"}
              </h2>

              <p className="mt-2 text-slate-500">
                Pilih motor untuk melihat informasi servis selengkapnya.
              </p>
            </div>

            {!loading && !error && (
              <p className="text-sm font-bold text-slate-500">
                {motors.length} motor ditemukan
              </p>
            )}
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse rounded-[2rem] border border-slate-100 bg-white p-7"
              >
                <div className="h-14 w-14 rounded-2xl bg-slate-200" />

                <div className="mt-6 h-6 w-2/3 rounded-lg bg-slate-200" />

                <div className="mt-3 h-4 w-1/2 rounded-lg bg-slate-100" />

                <div className="mt-8 h-12 rounded-2xl bg-slate-200" />
              </div>
            ))}
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="rounded-[2rem] border border-red-200 bg-red-50 p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-500">
              <Wrench size={30} />
            </div>

            <h2 className="mt-5 text-xl font-black text-red-600">
              Data motor gagal dimuat
            </h2>

            <p className="mt-2 text-red-500">
              {error}
            </p>

            <p className="mt-2 text-sm text-red-400">
              Pastikan Servisku API sedang berjalan.
            </p>
          </div>
        )}

        {/* MOTOR LIST */}
        {!loading && !error && motors.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {motors.map((motor) => (
              <article
                key={motor.id}
                className="group flex flex-col rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#002B5B] text-white transition-transform duration-300 group-hover:scale-105">
                    <Bike size={27} />
                  </div>

                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                    {motor.category}
                  </span>
                </div>

                <div className="mt-6 flex-1">
                  <p className="text-sm font-bold uppercase tracking-wider text-sky-600">
                    {motor.brand}
                  </p>

                  <h3 className="mt-2 text-xl font-black text-[#002B5B]">
                    {motor.name}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {motor.cc}
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {motor.transmission}
                    </span>
                  </div>

                  {motor.description && (
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-500">
                      {motor.description}
                    </p>
                  )}
                </div>

                <Link
                  to={`/motor/${motor.slug}`}
                  className="mt-7 flex items-center justify-between rounded-2xl bg-[#002B5B] px-5 py-4 font-bold text-white transition-colors hover:bg-orange-500"
                >
                  Lihat Detail Servis
                  <ArrowRight size={18} />
                </Link>
              </article>
            ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && motors.length === 0 && (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <Search size={30} />
            </div>

            <h2 className="mt-5 text-2xl font-black text-[#002B5B]">
              Motor tidak ditemukan
            </h2>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-500">
              Coba gunakan kata kunci lain seperti Honda, Yamaha, Beat, Vario,
              NMAX, atau tipe motor lainnya.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default CekMotor;