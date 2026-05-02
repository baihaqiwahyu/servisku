import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bike,
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
    desc: "Pengguna cukup mencari tipe motor, lalu sistem menampilkan estimasi komponen servis yang perlu diperhatikan.",
  },
  {
    icon: Gauge,
    title: "Berbasis Kilometer",
    desc: "Informasi servis ditampilkan berdasarkan estimasi jarak tempuh agar lebih mudah dipahami pengguna.",
  },
  {
    icon: Wrench,
    title: "Info Komponen Servis",
    desc: "Servisku menampilkan komponen seperti oli mesin, oli gardan, v-belt, busi, filter udara, kampas rem, dan ban.",
  },
  {
    icon: ShieldCheck,
    title: "Tampilan Praktis",
    desc: "Desain dibuat clean, rapi, dan ramah pengguna agar cocok digunakan oleh pemilik motor harian.",
  },
];

function Tentang() {
  return (
    <section className="bg-[#f7f9fb]">
      <div className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-white to-[#f7f9fb] px-6 py-20">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-bold text-sky-700 shadow-sm">
              <Info size={17} />
              Tentang Servisku
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-[#002B5B] md:text-5xl">
              Solusi Digital untuk Memahami Kebutuhan Servis Motor
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Servisku adalah website informatif yang membantu pengguna
              mengetahui estimasi kebutuhan servis motor berdasarkan tipe
              kendaraan. Website ini dirancang agar pengguna lebih mudah
              memahami kapan komponen penting perlu dicek atau diganti.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/cek-motor"
                className="inline-flex items-center gap-3 rounded-3xl bg-[#002B5B] px-7 py-4 font-bold text-white shadow-xl shadow-blue-950/20 transition-all hover:-translate-y-1 hover:bg-orange-500"
              >
                Cek Motor Sekarang <ArrowRight size={20} />
              </Link>

              <Link
                to="/daftar-motor"
                className="inline-flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-7 py-4 font-bold text-[#002B5B] transition-all hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50"
              >
                Lihat Daftar Motor
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-[#002B5B] p-8 text-white">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-sky-100">Konsep Project</p>
                  <h2 className="mt-1 text-3xl font-black">Servisku</h2>
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
                    Cek Estimasi Servis Motor
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm text-sky-100">Data</p>
                    <h3 className="mt-1 text-xl font-black">Motor & Komponen</h3>
                  </div>

                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm text-sky-100">Teknologi</p>
                    <h3 className="mt-1 text-xl font-black">
                      React + Laravel
                    </h3>
                  </div>
                </div>

                <div className="rounded-3xl bg-orange-400 p-5 text-[#002B5B]">
                  <p className="text-sm font-bold">Tujuan</p>
                  <h3 className="mt-1 text-xl font-black">
                    Membantu pengguna lebih peduli terhadap perawatan motor
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-orange-500">
            Kenapa Servisku?
          </p>
          <h2 className="text-3xl font-black tracking-tight text-[#002B5B] md:text-4xl">
            Dibuat untuk Pengguna Motor Harian
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Banyak pengguna motor belum terlalu memahami kapan komponen servis
            perlu dicek atau diganti. Servisku membantu menyajikan informasi
            tersebut secara lebih visual, sederhana, dan mudah dipahami.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => {
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

      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-blue-950/5">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-orange-500">
              Tujuan Website
            </p>
            <h2 className="text-3xl font-black text-[#002B5B]">
              Membantu Pengguna Mengambil Keputusan Servis
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Servisku tidak menggantikan pemeriksaan langsung oleh mekanik,
              tetapi membantu pengguna memahami gambaran awal mengenai komponen
              motor yang perlu diperhatikan berdasarkan estimasi penggunaan dan
              jarak tempuh.
            </p>
          </div>

          <div className="rounded-[2rem] border border-orange-100 bg-orange-50 p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-orange-600">
              Catatan Penting
            </p>
            <h2 className="text-3xl font-black text-[#002B5B]">
              Estimasi Bersifat Umum
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Interval servis dapat berbeda tergantung kondisi motor, gaya
              berkendara, kualitas jalan, cuaca, dan rekomendasi resmi dari
              pabrikan. Pemeriksaan bengkel tetap disarankan untuk hasil yang
              lebih akurat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tentang;