import Image from "next/image";
import TelegramIcon from "./TelegramIcon";
import SectionTitle from "./SectionTitle";

export default function CtaSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#2c3440]">
      <Image src="/footer.png" alt="Фон" fill className="object-cover object-center opacity-30" />
      <div className="absolute inset-0 bg-[#1e2530]/70" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle light>Опишіть свою ситуацію</SectionTitle>
        <p className="text-gray-300 text-base sm:text-lg mb-8">
          Ми подивимось кейс і скажемо, як краще діяти
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#1a6fc4] hover:bg-[#155fa0] text-white font-semibold px-8 py-3.5 rounded transition-colors duration-200 text-base"
        >
          <TelegramIcon size={20} />
          Написати в Telegram
        </a>
      </div>
    </section>
  );
}
