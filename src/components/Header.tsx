import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-20 w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <Image
        src="/logo.svg"
        alt="Логотип"
        width={120}
        height={40}
        className="h-10 w-auto"
        priority
      />
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex flex-col items-end text-sm font-medium text-white">
          <a href="tel:+380683493855" className="hover:underline">(068) 349-38-55</a>
          <a href="tel:+380958254508" className="hover:underline">(095) 825-45-08</a>
        </div>
      </div>
    </header>
  );
}
