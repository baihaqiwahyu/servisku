import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bike,
  Gauge,
  Wrench,
} from "lucide-react";

function MotorCard({ motor }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/10">
      {/* Visual */}
      <div className="relative mb-5 flex h-48 items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-sky-100 to-orange-100">
        <span className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-black text-orange-600 backdrop-blur">
          {motor.category}
        </span>

        <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-[#002B5B] text-white shadow-xl shadow-blue-950/20 transition-transform duration-300 group-hover:scale-110">
          <Bike size={48} />
        </div>
      </div>

      {/* Identity */}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">
          {motor.brand}
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          {motor.cc}
        </span>
      </div>

      <h3 className="text-xl font-black text-[#002B5B]">
        {motor.name}
      </h3>

      <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
        {motor.description}
      </p>

      {/* Information */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="mb-2 flex items-center gap-2 text-slate-500">
            <Wrench size={16} />
            <span className="text-xs font-bold">
              Komponen
            </span>
          </div>

          <p className="font-black text-[#002B5B]">
            {motor.service_components?.length || 0} item
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="mb-2 flex items-center gap-2 text-slate-500">
            <Gauge size={16} />
            <span className="text-xs font-bold">
              Transmisi
            </span>
          </div>

          <p className="truncate font-black text-[#002B5B]">
            {motor.transmission}
          </p>
        </div>
      </div>

      {/* CTA */}
      <Link
        to={`/motor/${motor.slug}`}
        className="mt-6 flex w-full items-center justify-between rounded-2xl bg-[#002B5B] px-5 py-4 font-bold text-white transition-all hover:bg-orange-500"
      >
        Lihat Detail Servis

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
}

export default MotorCard;