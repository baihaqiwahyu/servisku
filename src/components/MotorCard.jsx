import { Link } from "react-router-dom";
import { Bike, Gauge, Wrench } from "lucide-react";

function MotorCard({ motor }) {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/10">
      <div className="relative mb-5 flex h-48 items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-sky-100 to-orange-100">
        <div className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-black text-orange-600 backdrop-blur">
          {motor.category}
        </div>

        <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-[#002B5B] text-white shadow-xl shadow-blue-950/20 transition-transform group-hover:scale-110">
          <Bike size={48} />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">
          {motor.brand}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          {motor.cc}
        </span>
        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
          {motor.transmission}
        </span>
      </div>

      <h3 className="text-xl font-black text-[#002B5B]">{motor.name}</h3>

      <p className="mt-3 min-h-[52px] text-sm leading-7 text-slate-500">
        {motor.description}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="mb-2 flex items-center gap-2 text-slate-500">
            <Wrench size={16} />
            <span className="text-xs font-bold">Komponen</span>
          </div>
          <p className="font-black text-[#002B5B]">
            {motor.service_components?.length || 0} item
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="mb-2 flex items-center gap-2 text-slate-500">
            <Gauge size={16} />
            <span className="text-xs font-bold">Tipe</span>
          </div>
          <p className="font-black text-[#002B5B]">{motor.cc}</p>
        </div>
      </div>

      <Link
        to={`/cek-motor?q=${encodeURIComponent(motor.name)}`}
        className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-[#002B5B] px-5 py-3 font-bold text-white transition-all hover:bg-orange-500"
      >
        Cek Servis
      </Link>
    </div>
  );
}

export default MotorCard;