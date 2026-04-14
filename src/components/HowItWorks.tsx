import SectionTitle from "./SectionTitle";

const steps = [
  { number: 1, text: "Ви описуєте ситуацію" },
  { number: 2, text: "Ми аналізуємо кейс" },
  { number: 3, text: "Фіксація на місці або дистанційно" },
  { number: 4, text: "Ви отримуєте звіт" },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-12 md:py-16 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Як це працює</SectionTitle>

        {/* Desktop: single flex row, cards stretch to same height */}
        <div className="hidden sm:flex flex-row items-stretch gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-row items-center flex-1">
              <div className="flex flex-row items-center gap-3 bg-gray-100 border border-gray-200 rounded-lg px-5 py-5 w-full h-full">
                <span className="text-[#1a6fc4] font-bold text-base leading-none shrink-0">
                  {step.number}.
                </span>
                <span className="text-gray-800 text-base leading-snug">{step.text}</span>
              </div>
              {index < steps.length - 1 && (
                <svg className="shrink-0 mx-1.5 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="flex sm:hidden flex-col gap-2">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center">
              <div className="flex flex-row items-center gap-3 bg-gray-100 border border-gray-200 rounded-lg px-5 py-4 w-full">
                <span className="text-[#1a6fc4] font-bold text-base leading-none shrink-0">
                  {step.number}.
                </span>
                <span className="text-gray-800 text-base leading-snug">{step.text}</span>
              </div>
              {index < steps.length - 1 && (
                <svg className="text-gray-400 my-1" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 14l-5-5h10l-5 5z" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
