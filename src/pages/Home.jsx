import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Bike,
  Gauge,
  SearchCheck,
  Settings,
  ShieldCheck,
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
    icon: Gauge,
    value: "KM",
    label: "Estimasi Kilometer",
    color: "bg-orange-100 text-orange-600",
  },
];

const features = [
  {
    icon: SearchCheck,
    title: "Cek Tipe Motor",
    desc: "Pilih atau cari motor untuk melihat estimasi kebutuhan servis.",
  },
  {
    icon: Gauge,
    title: "Estimasi Kilometer",
    desc: "Informasi jadwal penggantian komponen berdasarkan jarak tempuh.",
  },
  {
    icon: Settings,
    title: "Info Komponen",
    desc: "Menampilkan oli, v-belt, busi, filter, kampas rem, dan komponen lainnya.",
  },
  {
    icon: ShieldCheck,
    title: "Mudah Dipahami",
    desc: "Tampilan dibuat sederhana agar cocok untuk pengguna umum.",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden pb-24 pt-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-100 via-white to-[#f7f9fb]" />
        <div className="absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute left-0 top-40 -z-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-bold text-sky-700 shadow-sm">
              <BadgeCheck size={17} />
              Digital Service Assistant
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-[#002B5B] md:text-6xl">
              Cek Jadwal Servis Motormu{" "}
              <span className="text-sky-600">dengan Mudah</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              Temukan estimasi servis motor berdasarkan tipe kendaraan, mulai
              dari oli mesin, oli gardan, v-belt, busi, filter, hingga komponen
              penting lainnya.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/cek-motor"
                className="inline-flex items-center gap-3 rounded-3xl bg-[#002B5B] px-7 py-4 font-bold text-white shadow-xl shadow-blue-950/20 transition-all hover:-translate-y-1 hover:bg-orange-500"
              >
                Cari Motor Kamu <ArrowRight size={20} />
              </Link>

              <Link
                to="/daftar-motor"
                className="inline-flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-7 py-4 font-bold text-[#002B5B] transition-all hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50"
              >
                Lihat Daftar Motor
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-2xl shadow-blue-950/10 backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-[#002B5B] p-6 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-sky-100">Preview Servis</p>
                    <h3 className="text-2xl font-black">Honda Beat FI</h3>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <Bike size={28} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl bg-white p-5 text-slate-900">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase text-red-500">
                          Prioritas Tinggi
                        </p>
                        <h4 className="mt-1 font-black text-[#002B5B]">
                          Ganti Oli Mesin
                        </h4>
                      </div>
                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
                        2.000–4.000 KM
                      </span>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-white/10 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase text-sky-100">
                          Komponen CVT
                        </p>
                        <h4 className="mt-1 font-black">V-Belt & Roller</h4>
                      </div>
                      <span className="rounded-full bg-orange-400 px-3 py-1 text-xs font-bold text-[#002B5B]">
                        20.000 KM+
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-12 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-blue-950/5 transition-all hover:-translate-y-2"
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-3xl ${item.color}`}
                  >
                    <Icon size={30} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#002B5B]">
                      {item.value}
                    </h3>
                    <p className="font-semibold text-slate-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-[#002B5B] md:text-4xl">
              Fitur Utama Servisku
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Dirancang agar pengguna bisa memahami kebutuhan servis motor
              dengan tampilan yang rapi, fun, dan mudah digunakan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-950/10"
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
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;