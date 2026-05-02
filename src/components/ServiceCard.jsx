import { Gauge, Wrench } from "lucide-react";

const priorityStyle = {
  Tinggi: "bg-red-100 text-red-600 border-red-200",
  Sedang: "bg-orange-100 text-orange-600 border-orange-200",
  Rendah: "bg-emerald-100 text-emerald-600 border-emerald-200",
};

function ServiceCard({ service }) {
  const interval = service?.interval_text || service?.interval || "-";

  return (
    <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-blue-950/10">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <Wrench size={24} />
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-black ${
            priorityStyle[service?.priority] || priorityStyle.Sedang
          }`}
        >
          {service?.priority || "Sedang"}
        </span>
      </div>

      <h3 className="text-lg font-black text-[#002B5B]">
        {service?.name || "Komponen Servis"}
      </h3>

      <div className="mt-3 flex items-center gap-2 text-sm font-bold text-slate-600">
        <Gauge size={17} />
        <span>{interval}</span>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-500">
        {service?.note || "Informasi servis belum tersedia."}
      </p>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-sky-400 to-[#002B5B]" />
      </div>
    </div>
  );
}

export default ServiceCard;