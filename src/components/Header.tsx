import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-20 w-full px-4 sm:px-6 lg:px-8 py-4">
      <Image
        src="/logo.svg"
        alt="Логотип"
        width={120}
        height={40}
        className="h-10 w-auto"
        priority
      />
    </header>
  );
}
