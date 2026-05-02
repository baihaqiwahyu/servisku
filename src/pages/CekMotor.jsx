import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Bike, Gauge, Search, ShieldCheck, Sparkles } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { getMotorcycles } from "../services/api";

function CekMotor() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [motors, setMotors] = useState([]);
  const [selectedMotor, setSelectedMotor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMotors(query);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  async function fetchMotors(searchValue = "") {
    try {
      setLoading(true);
      setError("");

      const data = await getMotorcycles(searchValue);
      setMotors(data);

      if (data.length > 0) {
        setSelectedMotor((current) => {
          const stillExist = data.find((motor) => motor.id === current?.id);
          return stillExist || data[0];
        });
      } else {
        setSelectedMotor(null);
      }
    } catch (err) {
      setError("Gagal mengambil data dari server Laravel.");
      setMotors([]);
      setSelectedMotor(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[#f7f9fb]">
      <div className="relative overflow-hidden bg-[#002B5B] px-6 py-20 text-white">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-sky-100">
            <Sparkles size={17} />
            Cek Estimasi Servis
          </p>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Cari Motor Kamu dan Lihat Kebutuhan Servisnya
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-sky-100">
            Pilih tipe motor untuk melihat estimasi penggantian oli, v-belt,
            busi, filter udara, kampas rem, dan komponen penting lainnya.
          </p>

          <div className="mt-10 max-w-3xl rounded-[2rem] bg-white/10 p-3 backdrop-blur-xl">
            <div className="relative">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                size={22}
              />

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Contoh: Honda Beat FI 110cc"
                className="h-16 w-full rounded-[1.5rem] border-0 bg-white pl-14 pr-5 text-[#002B5B] outline-none ring-0 placeholder:text-slate-400 focus:ring-4 focus:ring-sky-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[380px_1fr]">
        <aside className="space-y-4">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl shadow-blue-950/5">
            <h2 className="text-xl font-black text-[#002B5B]">Hasil Motor</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Data motor diambil langsung dari database Laravel.
            </p>
          </div>

          {loading && (
            <div className="rounded-[2rem] bg-white p-6 text-center shadow-sm">
              <p className="font-bold text-[#002B5B]">Memuat data...</p>
            </div>
          )}

          {error && (
            <div className="rounded-[2rem] border border-red-200 bg-red-50 p-6 text-center">
              <p className="font-bold text-red-600">{error}</p>
              <p className="mt-2 text-sm text-red-500">
                Pastikan Laravel sudah jalan dengan php artisan serve.
              </p>
            </div>
          )}

          {!loading && !error && motors.length > 0 && (
            <>
              {motors.map((motor) => (
                <button
                  key={motor.id}
                  onClick={() => setSelectedMotor(motor)}
                  className={`w-full rounded-[2rem] border p-5 text-left transition-all hover:-translate-y-1 hover:shadow-xl ${
                    selectedMotor?.id === motor.id
                      ? "border-sky-300 bg-sky-50 shadow-xl shadow-blue-950/5"
                      : "border-slate-100 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#002B5B] text-white">
                      <Bike size={25} />
                    </div>

                    <div>
                      <h3 className="font-black text-[#002B5B]">
                        {motor.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {motor.brand} • {motor.cc} • {motor.transmission}
                      </p>
                      <span className="mt-3 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                        {motor.category}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </>
          )}

          {!loading && !error && motors.length === 0 && (
            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-8 text-center">
              <p className="font-bold text-[#002B5B]">Motor tidak ditemukan</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Coba gunakan kata kunci lain, misalnya Honda, Yamaha, Beat,
                Vario, atau NMAX.
              </p>
            </div>
          )}
        </aside>

        <main>
          {selectedMotor ? (
            <div className="space-y-8">
              <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-blue-950/5">
                <div className="grid gap-0 md:grid-cols-[1fr_280px]">
                  <div className="p-8 md:p-10">
                    <div className="mb-5 flex flex-wrap gap-3">
                      <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">
                        {selectedMotor.brand}
                      </span>
                      <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
                        {selectedMotor.category}
                      </span>
                      <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
                        {selectedMotor.transmission}
                      </span>
                    </div>

                    <h2 className="text-3xl font-black text-[#002B5B] md:text-4xl">
                      {selectedMotor.name}
                    </h2>

                    <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                      {selectedMotor.description}
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      <div className="rounded-3xl bg-slate-50 p-5">
                        <p className="text-sm font-semibold text-slate-500">
                          Kapasitas
                        </p>
                        <p className="mt-1 text-xl font-black text-[#002B5B]">
                          {selectedMotor.cc}
                        </p>
                      </div>

                      <div className="rounded-3xl bg-slate-50 p-5">
                        <p className="text-sm font-semibold text-slate-500">
                          Transmisi
                        </p>
                        <p className="mt-1 text-xl font-black text-[#002B5B]">
                          {selectedMotor.transmission}
                        </p>
                      </div>

                      <div className="rounded-3xl bg-slate-50 p-5">
                        <p className="text-sm font-semibold text-slate-500">
                          Komponen
                        </p>
                        <p className="mt-1 text-xl font-black text-[#002B5B]">
                          {selectedMotor.service_components?.length || 0} item
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center bg-gradient-to-br from-sky-100 to-orange-100 p-8">
                    <div className="rounded-[2rem] bg-white/80 p-8 text-center shadow-xl backdrop-blur">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[2rem] bg-[#002B5B] text-white">
                        <Gauge size={38} />
                      </div>
                      <p className="mt-5 text-sm font-bold uppercase tracking-wider text-slate-500">
                        Estimasi Umum
                      </p>
                      <p className="mt-2 text-2xl font-black text-[#002B5B]">
                        Servis Berkala
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
                  <div>
                    <p className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-500">
                      Komponen Servis
                    </p>
                    <h2 className="text-3xl font-black text-[#002B5B]">
                      Rekomendasi Pengecekan
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                    <ShieldCheck size={18} />
                    Data dari Laravel API
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {selectedMotor.service_components?.map((service) => (
                    <ServiceCard
                      key={`${selectedMotor.id}-${service.id}`}
                      service={service}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center">
              <h2 className="text-2xl font-black text-[#002B5B]">
                Pilih motor terlebih dahulu
              </h2>
              <p className="mt-3 text-slate-500">
                Setelah motor dipilih, detail estimasi servis akan muncul di
                sini.
              </p>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}

export default CekMotor;
