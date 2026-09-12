import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bike,
  Code2,
  Database,
  Gauge,
  Info,
  SearchCheck,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const advantages = [
  {
    icon: SearchCheck,
    title: "Mudah Digunakan",
    desc: "Cari tipe motor dan temukan informasi servis tanpa proses yang rumit.",
  },
  {
    icon: Gauge,
    title: "Berbasis Kilometer",
    desc: "Interval servis disajikan berdasarkan estimasi jarak tempuh agar lebih mudah dipahami.",
  },
  {
    icon: Wrench,
    title: "Informasi Komponen",
    desc: "Menampilkan informasi oli, busi, filter udara, CVT, rem, dan komponen penting lainnya.",
  },
  {
    icon: ShieldCheck,
    title: "Prioritas Perawatan",
    desc: "Setiap komponen memiliki tingkat prioritas untuk membantu pengguna memahami mana yang perlu lebih diperhatikan.",
  },
];

function Tentang() {
  return (
    <section className="min-h-screen bg-[#f7f9fb]">
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-white to-[#f7f9fb] px-6 py-20">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-bold text-sky-700 shadow-sm">
              <Info size={17} />
              Tentang Servisku
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-[#002B5B] md:text-5xl">
              Membantu Pengguna Memahami Perawatan Motor
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Servisku adalah aplikasi web yang membantu pengguna menemukan
              informasi interval servis dan komponen penting berdasarkan tipe
              sepeda motor.
            </p>

            <p className="mt-4 max-w-2xl leading-8 text-slate-600">
              Informasi disajikan secara sederhana agar pengguna dapat memahami
              kapan sebuah komponen sebaiknya diperiksa atau dirawat sebelum
              muncul masalah yang lebih besar.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/cek-motor"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#002B5B] px-7 py-4 font-bold text-white shadow-xl shadow-blue-950/20 transition-all hover:-translate-y-1 hover:bg-orange-500"
              >
                Cek Motor Sekarang
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/daftar-motor"
                className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-bold text-[#002B5B] transition-all hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50"
              >
                Lihat Daftar Motor
              </Link>
            </div>
          </div>

          {/* PROJECT SUMMARY */}
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-[#002B5B] p-8 text-white">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-sky-200">
                    Project Overview
                  </p>

                  <h2 className="mt-1 text-3xl font-black">
                    Servisku
                  </h2>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">
                  <Bike size={34} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl bg-white p-5 text-[#002B5B]">
                  <p className="text-sm font-bold text-slate-500">
                    Fokus Utama
                  </p>

                  <h3 className="mt-1 text-xl font-black">
                    Informasi Servis Berkala
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm text-sky-100">
                      Data
                    </p>

                    <h3 className="mt-1 text-xl font-black">
                      Motor & Komponen
                    </h3>
                  </div>

                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm text-sky-100">
                      Arsitektur
                    </p>

                    <h3 className="mt-1 text-xl font-black">
                      React + Laravel API
                    </h3>
                  </div>
                </div>

                <div className="rounded-3xl bg-orange-400 p-5 text-[#002B5B]">
                  <p className="text-sm font-bold">
                    Tujuan
                  </p>

                  <h3 className="mt-1 text-xl font-black">
                    Membuat informasi perawatan motor lebih mudah dipahami
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">
            Kenapa Servisku?
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#002B5B] md:text-4xl">
            Informasi servis yang lebih sederhana
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Servisku dirancang untuk pengguna motor harian yang ingin memahami
            dasar perawatan kendaraan tanpa harus membaca informasi teknis yang
            terlalu kompleks.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => {
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

      {/* TECHNOLOGY */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 rounded-[2.5rem] bg-[#002B5B] p-8 text-white md:p-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-300">
              Teknologi
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Dibangun sebagai aplikasi frontend dan REST API
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-sky-100">
              Frontend menangani antarmuka dan interaksi pengguna, sedangkan
              Laravel menyediakan data motor dan komponen servis melalui API.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[2rem] bg-white/10 p-6">
              <Code2 size={25} className="text-orange-300" />

              <h3 className="mt-8 text-lg font-black">
                React + Vite
              </h3>

              <p className="mt-3 text-sm leading-7 text-sky-100">
                Digunakan untuk membangun antarmuka aplikasi.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/10 p-6">
              <Database size={25} className="text-orange-300" />

              <h3 className="mt-8 text-lg font-black">
                Laravel API
              </h3>

              <p className="mt-3 text-sm leading-7 text-sky-100">
                Menyediakan data motor dan informasi servis.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/10 p-6">
              <Wrench size={25} className="text-orange-300" />

              <h3 className="mt-8 text-lg font-black">
                Tailwind CSS
              </h3>

              <p className="mt-3 text-sm leading-7 text-sky-100">
                Digunakan untuk styling dan responsive layout.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-blue-950/5">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">
              Tujuan Servisku
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#002B5B]">
              Membantu sebelum datang ke bengkel
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Servisku memberikan gambaran awal mengenai komponen dan interval
              servis sehingga pengguna dapat lebih memahami kondisi perawatan
              kendaraannya.
            </p>
          </div>

          <div className="rounded-[2rem] border border-orange-100 bg-orange-50 p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-600">
              Catatan Penting
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#002B5B]">
              Informasi bersifat panduan
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Interval servis dapat berbeda berdasarkan kondisi kendaraan, gaya
              berkendara, lingkungan penggunaan, dan rekomendasi produsen.
              Pemeriksaan mekanik tetap disarankan untuk menentukan kondisi
              kendaraan secara langsung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tentang;