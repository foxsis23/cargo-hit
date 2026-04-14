import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[420px] md:min-h-[480px] bg-[#2c3440] overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Пошкоджений вантаж"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e2530]/90 via-[#2c3440]/70 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Пошкодили вантаж
              <br />
              під час перевезення?
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Зафіксуємо збиток, підготуємо докази
              <br className="hidden sm:block" />
              та допоможемо отримати компенсацію
            </p>
            <button className="bg-[#1a6fc4] hover:bg-[#155fa0] text-white font-semibold px-8 py-3 rounded transition-colors duration-200 text-base cursor-pointer">
              Описати ситуацію
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
