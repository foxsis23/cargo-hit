import { Camera, Search, FileCheck, Handshake } from "lucide-react";
import SectionTitle from "./SectionTitle";

const services = [
  { icon: Camera,    title: "Фіксація збитків",        iconColor: "text-blue-500",   iconBg: "bg-blue-50"   },
  { icon: Search,    title: "Аналіз ситуації",          iconColor: "text-violet-500", iconBg: "bg-violet-50" },
  { icon: FileCheck, title: "Матеріали для претензій",  iconColor: "text-green-500",  iconBg: "bg-green-50"  },
  { icon: Handshake, title: "Рекомендації щодо дій",    iconColor: "text-orange-500", iconBg: "bg-orange-50" },
];

export default function WhatWeDo() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Що ми зробимо</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, title, iconColor, iconBg }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center gap-4 shadow-sm"
            >
              <div className={`p-3 ${iconBg} rounded-lg`}>
                <Icon className={iconColor} size={32} strokeWidth={1.5} />
              </div>
              <p className="text-sm sm:text-base font-medium text-gray-800 leading-tight">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
