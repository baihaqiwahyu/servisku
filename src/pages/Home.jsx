import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Bike,
  Gauge,
  SearchCheck,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const stats = [
  {
    icon: Bike,
    value: "20+",
    label: "Tipe Motor",
    color: "bg-blue-100 text-[#002B5B]",
  },
  {
    icon: Settings,
    value: "10+",
    label: "Komponen Servis",
    color: "bg-sky-100 text-sky-700",
  },
  {
    icon: ShieldCheck,
    value: "3",
    label: "Tingkat Prioritas",
    color: "bg-orange-100 text-orange-600",
  },
];

const features = [
  {
    icon: SearchCheck,
    title: "Cari Motor",
    desc: "Temukan tipe motor berdasarkan nama atau brand dengan cepat.",
  },
  {
    icon: Gauge,
    title: "Lihat Interval Servis",
    desc: "Ketahui estimasi interval perawatan berdasarkan kilometer.",
  },
  {
    icon: Settings,
    title: "Cek Komponen",
    desc: "Lihat komponen seperti oli, busi, filter udara, CVT, dan rem.",
  },
  {
    icon: ShieldCheck,
    title: "Prioritas Perawatan",
    desc: "Setiap komponen memiliki tingkat prioritas agar lebih mudah dipahami.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-24 pt-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-100 via-white to-[#f7f9fb]" />

        <div className="absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute left-0 top-40 -z-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-bold text-sky-700 shadow-sm">
              <BadgeCheck size={17} />
              Informasi Servis Motor
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-[#002B5B] md:text-6xl">
              Ketahui Kapan Motor Kamu
              <span className="text-sky-600"> Perlu Diservis</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              Servisku membantu kamu menemukan informasi interval servis dan
              komponen penting berdasarkan tipe sepeda motor dengan tampilan
              yang sederhana dan mudah dipahami.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/cek-motor"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#002B5B] px-7 py-4 font-bold text-white shadow-xl shadow-blue-950/20 transition-all hover:-translate-y-1 hover:bg-orange-500"
              >
                Cari Motor Kamu
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/daftar-motor"
                className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-bold text-[#002B5B] transition-all hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50"
              >
                Lihat Semua Motor
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-emerald-500" />
                Data dari API
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-emerald-500" />
                Tanpa Login
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-emerald-500" />
                Mudah Digunakan
              </div>
            </div>
          </div>

          {/* RIGHT - PRODUCT PREVIEW */}
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-orange-300/30 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-2xl shadow-blue-950/10 backdrop-blur-xl">
              <div className="rounded-[1.7rem] bg-[#002B5B] p-6 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-sky-200">
                      Contoh Informasi Servis
                    </p>

                    <h3 className="mt-1 text-2xl font-black">
                      Honda Beat FI 110
                    </h3>

                    <p className="mt-2 text-sm text-sky-100">
                      Honda • Matic • 110cc
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <Bike size={28} />
                  </div>
                </div>

                <div className="space-y-4">
                  {/* OIL */}
                  <div className="rounded-3xl bg-white p-5 text-slate-900">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-black text-red-600">
                          Prioritas Tinggi
                        </span>

                        <h4 className="mt-3 font-black text-[#002B5B]">
                          Oli Mesin
                        </h4>

                        <p className="mt-1 text-sm text-slate-500">
                          Interval servis
                        </p>
                      </div>

                      <span className="rounded-2xl bg-slate-100 px-3 py-2 text-xs font-black text-[#002B5B]">
                        2.000–4.000 KM
                      </span>
                    </div>
                  </div>

                  {/* CVT */}
                  <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex rounded-full bg-orange-400/20 px-3 py-1 text-xs font-black text-orange-200">
                          Prioritas Sedang
                        </span>

                        <h4 className="mt-3 font-black">
                          V-Belt & Roller
                        </h4>

                        <p className="mt-1 text-sm text-sky-100">
                          Pemeriksaan CVT
                        </p>
                      </div>

                      <span className="rounded-2xl bg-orange-400 px-3 py-2 text-xs font-black text-[#002B5B]">
                        20.000 KM
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/cek-motor"
                  className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-bold transition hover:bg-white/20"
                >
                  Cari motor lainnya

                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="-mt-10 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-blue-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl ${item.color}`}
                  >
                    <Icon size={29} />
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-[#002B5B]">
                      {item.value}
                    </h3>

                    <p className="mt-1 font-semibold text-slate-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 rounded-[2.5rem] bg-[#002B5B] p-8 text-white md:p-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-300">
                Cara Menggunakan
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                Cek kebutuhan servis hanya dalam beberapa langkah
              </h2>

              <p className="mt-5 max-w-lg leading-8 text-sky-100">
                Tidak perlu membuat akun. Cari tipe motor, pilih kendaraan,
                lalu lihat informasi servis yang tersedia.
              </p>

              <Link
                to="/cek-motor"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-bold text-[#002B5B] transition hover:bg-orange-400"
              >
                Mulai Sekarang
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[2rem] bg-white/10 p-6">
                <span className="text-4xl font-black text-orange-300">
                  01
                </span>

                <h3 className="mt-8 text-lg font-black">
                  Cari Motor
                </h3>

                <p className="mt-3 text-sm leading-7 text-sky-100">
                  Masukkan nama atau brand motor yang kamu gunakan.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white/10 p-6">
                <span className="text-4xl font-black text-orange-300">
                  02
                </span>

                <h3 className="mt-8 text-lg font-black">
                  Pilih Motor
                </h3>

                <p className="mt-3 text-sm leading-7 text-sky-100">
                  Pilih tipe motor yang sesuai dari hasil pencarian.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white/10 p-6">
                <span className="text-4xl font-black text-orange-300">
                  03
                </span>

                <h3 className="mt-8 text-lg font-black">
                  Lihat Servis
                </h3>

                <p className="mt-3 text-sm leading-7 text-sky-100">
                  Lihat komponen, interval, dan prioritas perawatan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">
              Fitur
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#002B5B] md:text-4xl">
              Semua informasi penting dalam satu tempat
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Servisku dirancang untuk memberikan informasi servis yang
              sederhana tanpa membuat pengguna bingung dengan terlalu banyak
              data.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-950/10"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                    <Icon size={27} />
                  </div>

                  <h3 className="mb-3 text-lg font-black text-[#002B5B]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-100 to-orange-100 p-8 md:p-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-300/30 blur-3xl" />

            <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#002B5B] text-white">
                  <Wrench size={26} />
                </div>

                <h2 className="max-w-2xl text-3xl font-black text-[#002B5B] md:text-4xl">
                  Cari motor kamu dan lihat jadwal servisnya
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-slate-600">
                  Pilih dari berbagai tipe motor yang tersedia dan lihat
                  informasi servis secara langsung.
                </p>
              </div>

              <Link
                to="/cek-motor"
                className="inline-flex w-fit shrink-0 items-center gap-3 rounded-2xl bg-[#002B5B] px-7 py-4 font-bold text-white shadow-xl shadow-blue-950/20 transition hover:-translate-y-1 hover:bg-orange-500"
              >
                Cek Motor Sekarang
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;