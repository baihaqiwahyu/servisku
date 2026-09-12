import {
  AlertCircle,
  Gauge,
  Wrench,
} from "lucide-react";

const priorityStyle = {
  Tinggi: {
    badge: "border-red-200 bg-red-50 text-red-600",
    icon: "bg-red-50 text-red-600",
  },

  Sedang: {
    badge: "border-orange-200 bg-orange-50 text-orange-600",
    icon: "bg-orange-50 text-orange-600",
  },

  Rendah: {
    badge: "border-emerald-200 bg-emerald-50 text-emerald-600",
    icon: "bg-emerald-50 text-emerald-600",
  },
};

function ServiceCard({ service }) {
  const priority = service?.priority || "Sedang";

  const style =
    priorityStyle[priority] || priorityStyle.Sedang;

  const interval =
    service?.interval_text ||
    service?.interval ||
    "Belum tersedia";

  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-blue-950/10">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.icon}`}
        >
          <Wrench size={24} />
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-black ${style.badge}`}
        >
          Prioritas {priority}
        </span>
      </div>

      {/* NAME */}
      <h3 className="mt-6 text-xl font-black text-[#002B5B]">
        {service?.name || "Komponen Servis"}
      </h3>

      {/* INTERVAL */}
      <div className="mt-4 rounded-2xl bg-slate-50 p-4">
        <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
          <Gauge size={17} />

          <span>Interval Servis</span>
        </div>

        <p className="mt-2 font-black text-[#002B5B]">
          {interval}
        </p>
      </div>

      {/* NOTE */}
      <div className="mt-4 flex flex-1 items-start gap-3">
        <AlertCircle
          size={18}
          className="mt-1 shrink-0 text-slate-400"
        />

        <p className="text-sm leading-7 text-slate-500">
          {service?.note ||
            "Informasi tambahan untuk komponen ini belum tersedia."}
        </p>
      </div>
    </article>
  );
}

export default ServiceCard;