import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Bike,
  Gauge,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import ServiceCard from "../components/ServiceCard";
import { getMotorcycleDetail } from "../services/api";

function DetailMotor() {
  const { slug } = useParams();

  const [motor, setMotor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function fetchMotorDetail() {
      try {
        setLoading(true);
        setError("");

        const data = await getMotorcycleDetail(slug);

        if (!ignore) {
          setMotor(data);
        }
      } catch {
        if (!ignore) {
          setError(
            "Detail motor tidak dapat dimuat. Pastikan motor tersedia dan Laravel API sedang berjalan."
          );
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchMotorDetail();

    return () => {
      ignore = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <section className="min-h-[70vh] bg-[#f7f9fb] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-[#002B5B]" />

            <p className="font-bold text-[#002B5B]">
              Memuat detail motor...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !motor) {
    return (
      <section className="min-h-[70vh] bg-[#f7f9fb] px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[2rem] border border-red-100 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-500">
              <Bike size={30} />
            </div>

            <h1 className="mt-6 text-2xl font-black text-[#002B5B]">
              Motor tidak ditemukan
            </h1>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-500">
              {error ||
                "Data motor yang kamu cari tidak tersedia di database Servisku."}
            </p>

            <Link
              to="/daftar-motor"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#002B5B] px-6 py-3 font-bold text-white transition hover:bg-orange-500"
            >
              <ArrowLeft size={18} />
              Kembali ke Daftar Motor
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f7f9fb]">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-white to-[#f7f9fb] px-6 py-16">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            to="/daftar-motor"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-[#002B5B]"
          >
            <ArrowLeft size={18} />
            Kembali ke Daftar Motor
          </Link>

          <div className="overflow-hidden rounded-[2rem] border border-white bg-white/90 shadow-xl shadow-blue-950/5 backdrop-blur">
            <div className="grid lg:grid-cols-[1fr_380px]">
              {/* Informasi */}
              <div className="p-8 md:p-12">
                <div className="mb-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">
                    {motor.brand}
                  </span>

                  <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
                    {motor.category}
                  </span>

                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
                    {motor.transmission}
                  </span>
                </div>

                <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-orange-500">
                  Detail Motor
                </p>

                <h1 className="text-4xl font-black tracking-tight text-[#002B5B] md:text-5xl">
                  {motor.name}
                </h1>

                <p className="mt-6 max-w-3xl leading-8 text-slate-600">
                  {motor.description}
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                      <Gauge size={20} />
                    </div>

                    <p className="text-sm font-semibold text-slate-500">
                      Kapasitas
                    </p>

                    <p className="mt-1 text-xl font-black text-[#002B5B]">
                      {motor.cc}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-slate-50 p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                      <Bike size={20} />
                    </div>

                    <p className="text-sm font-semibold text-slate-500">
                      Transmisi
                    </p>

                    <p className="mt-1 text-xl font-black text-[#002B5B]">
                      {motor.transmission}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-slate-50 p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      <Wrench size={20} />
                    </div>

                    <p className="text-sm font-semibold text-slate-500">
                      Komponen Servis
                    </p>

                    <p className="mt-1 text-xl font-black text-[#002B5B]">
                      {motor.service_components?.length || 0} item
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="flex min-h-[320px] items-center justify-center bg-gradient-to-br from-sky-100 to-orange-100 p-8">
                <div className="text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[2.5rem] bg-[#002B5B] text-white shadow-2xl shadow-blue-950/20">
                    <Bike size={64} />
                  </div>

                  <p className="mt-6 text-sm font-bold uppercase tracking-widest text-slate-500">
                    Servisku
                  </p>

                  <p className="mt-2 text-2xl font-black text-[#002B5B]">
                    Servis Berkala
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service components */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-orange-500">
              Perawatan Motor
            </p>

            <h2 className="text-3xl font-black text-[#002B5B] md:text-4xl">
              Komponen yang Perlu Dicek
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-500">
              Gunakan informasi interval berikut sebagai panduan untuk
              mengetahui kapan komponen motor sebaiknya diperiksa atau
              diservis.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
            <ShieldCheck size={18} />
            Data dari Servisku API
          </div>
        </div>

        {motor.service_components?.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {motor.service_components.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center">
            <Wrench
              size={35}
              className="mx-auto text-slate-400"
            />

            <h3 className="mt-5 text-xl font-black text-[#002B5B]">
              Informasi servis belum tersedia
            </h3>

            <p className="mt-2 text-slate-500">
              Motor ini belum memiliki data komponen servis.
            </p>
          </div>
        )}

        <div className="mt-12 rounded-[2rem] bg-[#002B5B] p-8 text-white md:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-sky-200">
                Cari Motor Lain
              </p>

              <h2 className="mt-2 text-2xl font-black md:text-3xl">
                Mau cek jadwal servis motor lainnya?
              </h2>
            </div>

            <Link
              to="/daftar-motor"
              className="inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3 font-bold text-[#002B5B] transition hover:bg-orange-500 hover:text-white"
            >
              Lihat Daftar Motor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailMotor;