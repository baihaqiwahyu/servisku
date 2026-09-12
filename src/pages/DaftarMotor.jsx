import { useEffect, useMemo, useState } from "react";
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

  useEffect(() => {
    let ignore = false;

    async function loadMotors() {
      try {
        setLoading(true);
        setError("");

        const data = await getMotorcycles();

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
    }

    loadMotors();

    return () => {
      ignore = true;
    };
  }, []);

  const brands = useMemo(() => {
    const uniqueBrands = [
      ...new Set(
        motors
          .map((motor) => motor.brand)
          .filter(Boolean)
      ),
    ];

    return ["Semua", ...uniqueBrands];
  }, [motors]);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        motors
          .map((motor) => motor.category)
          .filter(Boolean)
      ),
    ];

    return ["Semua", ...uniqueCategories];
  }, [motors]);

  const transmissions = useMemo(() => {
    const uniqueTransmissions = [
      ...new Set(
        motors
          .map((motor) => motor.transmission)
          .filter(Boolean)
      ),
    ];

    return ["Semua", ...uniqueTransmissions];
  }, [motors]);

  const filteredMotors = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return motors.filter((motor) => {
      const searchableText = [
        motor.name,
        motor.brand,
        motor.cc,
        motor.category,
        motor.transmission,
      ]
        .filter(Boolean)
        .map((value) => String(value).toLowerCase());

      const matchSearch =
        keyword === "" ||
        searchableText.some((value) => value.includes(keyword));

      const matchBrand =
        brand === "Semua" || motor.brand === brand;

      const matchCategory =
        category === "Semua" || motor.category === category;

      const matchTransmission =
        transmission === "Semua" ||
        motor.transmission === transmission;

      return (
        matchSearch &&
        matchBrand &&
        matchCategory &&
        matchTransmission
      );
    });
  }, [motors, search, brand, category, transmission]);

  const isFiltering =
    search.trim() !== "" ||
    brand !== "Semua" ||
    category !== "Semua" ||
    transmission !== "Semua";

  function resetFilter() {
    setSearch("");
    setBrand("Semua");
    setCategory("Semua");
    setTransmission("Semua");
  }

  return (
    <section className="min-h-screen bg-[#f7f9fb]">
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-white to-[#f7f9fb] px-6 py-20">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-bold text-sky-700 shadow-sm">
              <Sparkles size={17} />
              Jelajahi Motor
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-[#002B5B] md:text-5xl">
              Temukan Motor yang Sesuai dengan Kendaraanmu
            </h1>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              Jelajahi seluruh motor yang tersedia di Servisku dan gunakan
              filter untuk menemukan tipe kendaraan dengan lebih cepat.
            </p>
          </div>

          {/* FILTER */}
          <div className="mt-10 rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-xl shadow-blue-950/5 backdrop-blur">
            <div className="grid gap-4 lg:grid-cols-[1fr_180px_220px_180px]">
              {/* SEARCH */}
              <div className="relative">
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={22}
                />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Cari Beat, Vario, NMAX..."
                  className="h-16 w-full rounded-[1.5rem] border border-slate-200 bg-white pl-14 pr-5 text-[#002B5B] outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              {/* BRAND */}
              <div className="relative">
                <Filter
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={20}
                />

                <select
                  value={brand}
                  onChange={(event) => setBrand(event.target.value)}
                  className="h-16 w-full rounded-[1.5rem] border border-slate-200 bg-white pl-14 pr-5 font-bold text-[#002B5B] outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                >
                  {brands.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item === "Semua" ? "Semua Brand" : item}
                    </option>
                  ))}
                </select>
              </div>

              {/* CATEGORY */}
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="h-16 w-full rounded-[1.5rem] border border-slate-200 bg-white px-5 font-bold text-[#002B5B] outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
              >
                {categories.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item === "Semua"
                      ? "Semua Kategori"
                      : item}
                  </option>
                ))}
              </select>

              {/* TRANSMISSION */}
              <select
                value={transmission}
                onChange={(event) =>
                  setTransmission(event.target.value)
                }
                className="h-16 w-full rounded-[1.5rem] border border-slate-200 bg-white px-5 font-bold text-[#002B5B] outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
              >
                {transmissions.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item === "Semua"
                      ? "Semua Transmisi"
                      : item}
                  </option>
                ))}
              </select>
            </div>

            {isFiltering && (
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
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

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
              Motor Tersedia
            </p>

            <h2 className="mt-2 text-3xl font-black text-[#002B5B]">
              {loading
                ? "Memuat Motor..."
                : `${filteredMotors.length} Motor Ditemukan`}
            </h2>
          </div>

          {!loading && !error && (
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">
              <Bike size={18} />
              Total Data: {motors.length} Motor
            </div>
          )}
        </div>

        {/* LOADING */}
        {loading && (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="animate-pulse rounded-[2rem] border border-slate-100 bg-white p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="h-14 w-14 rounded-2xl bg-slate-200" />
                  <div className="h-7 w-20 rounded-full bg-slate-100" />
                </div>

                <div className="mt-7 h-4 w-20 rounded bg-slate-100" />
                <div className="mt-3 h-7 w-2/3 rounded bg-slate-200" />

                <div className="mt-5 flex gap-2">
                  <div className="h-7 w-16 rounded-full bg-slate-100" />
                  <div className="h-7 w-20 rounded-full bg-slate-100" />
                </div>

                <div className="mt-8 h-12 rounded-2xl bg-slate-200" />
              </div>
            ))}
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="rounded-[2rem] border border-red-200 bg-red-50 p-10 text-center">
            <p className="font-bold text-red-600">
              Data motor gagal dimuat
            </p>

            <p className="mt-2 text-sm text-red-500">
              {error}
            </p>

            <p className="mt-2 text-sm text-red-400">
              Pastikan Servisku API sedang berjalan.
            </p>
          </div>
        )}

        {/* MOTOR GRID */}
        {!loading &&
          !error &&
          filteredMotors.length > 0 && (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMotors.map((motor) => (
                <MotorCard
                  key={motor.id}
                  motor={motor}
                />
              ))}
            </div>
          )}

        {/* EMPTY */}
        {!loading &&
          !error &&
          filteredMotors.length === 0 && (
            <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <Search size={30} />
              </div>

              <h2 className="mt-5 text-2xl font-black text-[#002B5B]">
                Motor tidak ditemukan
              </h2>

              <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-500">
                Tidak ada motor yang sesuai dengan pencarian atau filter
                yang kamu gunakan.
              </p>

              <button
                type="button"
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