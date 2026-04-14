import Image from "next/image";
import { Package, User, Shield, Camera } from "lucide-react";
import SectionTitle from "./SectionTitle";

const reasons = [
  { icon: Package, text: "Пошкодження при доставці",    color: "text-orange-500", bg: "bg-orange-100" },
  { icon: User,    text: "Спір з перевізником",          color: "text-orange-400", bg: "bg-orange-50"  },
  { icon: Shield,  text: "Відмова страхової",            color: "text-blue-400",   bg: "bg-blue-100"   },
  { icon: Camera,  text: "Потрібно зафіксувати збиток",  color: "text-green-500",  bg: "bg-green-100"  },
];

export default function WhenToContact() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Коли до нас звертаються</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left: reasons list */}
          <div className="flex flex-col justify-center gap-5">
            {reasons.map(({ icon: Icon, text, color, bg }) => (
              <div key={text} className="flex items-center gap-4">
                <div className={`${bg} p-2.5 rounded-full shrink-0`}>
                  <Icon className={color} size={22} strokeWidth={1.8} />
                </div>
                <span className="text-gray-800 text-base">{text}</span>
              </div>
            ))}
          </div>

          {/* Right: full-height image */}
          <div className="hidden md:block relative min-h-[320px] rounded-xl overflow-hidden">
            <Image
              src="/cto.png"
              alt="Пошкоджений вантаж при доставці"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
