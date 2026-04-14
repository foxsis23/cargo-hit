interface SectionTitleProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionTitle({ children, light = false }: SectionTitleProps) {
  const lineColor = light ? "bg-gray-500/60" : "bg-gray-300";
  const textColor = light ? "text-white" : "text-gray-900";

  return (
    <div className="flex items-center gap-4 mb-10">
      <div className={`flex-1 h-px ${lineColor}`} />
      <h2 className={`text-2xl sm:text-3xl font-bold ${textColor} text-center whitespace-nowrap`}>
        {children}
      </h2>
      <div className={`flex-1 h-px ${lineColor}`} />
    </div>
  );
}
