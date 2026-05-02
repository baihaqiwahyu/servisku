import { useCallback, useEffect, useMemo, useState } from "react";
import { Bike, Filter, Search, Sparkles } from "lucide-react";
import MotorCard from "../components/MotorCard";
import { getMotorcycles } from "../services/api";

function DaftarMotor() {
  const [motors, setMotors] = useState([]);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("Semua");
  const [category, setCategory] = useState("Semua");
  const [transmission, setTransmission] = useState("Semua");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMotors = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getMotorcycles();
      setMotors(data);
    } catch {
      setError("Gagal mengambil data motor dari Laravel API.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMotors();
  }, [fetchMotors]);

  const brands = useMemo(() => {
    const uniqueBrands = [...new Set(motors.map((motor) => motor.brand))];
    return ["Semua", ...uniqueBrands];
  }, [motors]);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(motors.map((motor) => motor.category))];
    return ["Semua", ...uniqueCategories];
  }, [motors]);

  const transmissions = useMemo(() => {
    const uniqueTransmissions = [
      ...new Set(motors.map((motor) => motor.transmission)),
    ];
    return ["Semua", ...uniqueTransmissions];
  }, [motors]);

  const filteredMotors = useMemo(() => {
    return motors.filter((motor) => {
      const keyword = search.toLowerCase();

      const matchSearch =
        motor.name.toLowerCase().includes(keyword) ||
        motor.brand.toLowerCase().includes(keyword) ||
        motor.cc.toLowerCase().includes(keyword) ||
        motor.category.toLowerCase().includes(keyword) ||
        motor.transmission.toLowerCase().includes(keyword);

      const matchBrand = brand === "Semua" || motor.brand === brand;
      const matchCategory = category === "Semua" || motor.category === category;
      const matchTransmission =
        transmission === "Semua" || motor.transmission === transmission;

      return matchSearch && matchBrand && matchCategory && matchTransmission;
    });
  }, [motors, search, brand, category, transmission]);

  function resetFilter() {
    setSearch("");
    setBrand("Semua");
    setCategory("Semua");
    setTransmission("Semua");
  }

  return (
    <section className="bg-[#f7f9fb]">
      <div className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-white to-[#f7f9fb] px-6 py-20">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-bold text-sky-700 shadow-sm">
              <Sparkles size={17} />
              Daftar Motor Servisku
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-[#002B5B] md:text-5xl">
              Pilih Motor dan Cek Estimasi Servisnya
            </h1>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              Cari motor berdasarkan nama, brand, kategori, atau jenis
              transmisi. Data motor diambil langsung dari database Laravel.
            </p>
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-xl shadow-blue-950/5 backdrop-blur">
            <div className="grid gap-4 lg:grid-cols-[1fr_180px_220px_180px]">
              <div className="relative">
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={22}
                />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Cari motor, contoh: Beat, Vario, NMAX..."
                  className="h-16 w-full rounded-[1.5rem] border border-slate-200 bg-white pl-14 pr-5 text-[#002B5B] outline-none focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div className="relative">
                <Filter
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={20}
                />

                <select
                  value={brand}
                  onChange={(event) => setBrand(event.target.value)}
                  className="h-16 w-full rounded-[1.5rem] border border-slate-200 bg-white pl-14 pr-5 font-bold text-[#002B5B] outline-none focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                >
                  {brands.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="h-16 w-full rounded-[1.5rem] border border-slate-200 bg-white px-5 font-bold text-[#002B5B] outline-none focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item === "Semua" ? "Semua Kategori" : item}
                  </option>
                ))}
              </select>

              <select
                value={transmission}
                onChange={(event) => setTransmission(event.target.value)}
                className="h-16 w-full rounded-[1.5rem] border border-slate-200 bg-white px-5 font-bold text-[#002B5B] outline-none focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
              >
                {transmissions.map((item) => (
                  <option key={item} value={item}>
                    {item === "Semua" ? "Semua Transmisi" : item}
                  </option>
                ))}
              </select>
            </div>

            {(search ||
              brand !== "Semua" ||
              category !== "Semua" ||
              transmission !== "Semua") && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={resetFilter}
                  className="rounded-full bg-slate-100 px-5 py-2 text-sm font-bold text-slate-600 transition hover:bg-orange-100 hover:text-orange-600"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Motor Tersedia
            </p>
            <h2 className="mt-2 text-3xl font-black text-[#002B5B]">
              {filteredMotors.length} Motor Ditemukan
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">
            <Bike size={18} />
            Total Data: {motors.length} Motor
          </div>
        </div>

        {loading && (
          <div className="rounded-[2rem] bg-white p-10 text-center shadow-sm">
            <p className="font-bold text-[#002B5B]">Memuat data motor...</p>
          </div>
        )}

        {error && (
          <div className="rounded-[2rem] border border-red-200 bg-red-50 p-10 text-center">
            <p className="font-bold text-red-600">{error}</p>
            <p className="mt-2 text-sm text-red-500">
              Pastikan Laravel berjalan dengan perintah php artisan serve.
            </p>
          </div>
        )}

        {!loading && !error && filteredMotors.length > 0 && (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMotors.map((motor) => (
              <MotorCard key={motor.id} motor={motor} />
            ))}
          </div>
        )}

        {!loading && !error && filteredMotors.length === 0 && (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center">
            <p className="text-xl font-black text-[#002B5B]">
              Motor tidak ditemukan
            </p>
            <p className="mt-3 text-slate-500">
              Coba gunakan kata kunci lain atau ubah filter yang dipilih.
            </p>
            <button
              onClick={resetFilter}
              className="mt-6 rounded-full bg-[#002B5B] px-6 py-3 font-bold text-white transition hover:bg-orange-500"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default DaftarMotor;