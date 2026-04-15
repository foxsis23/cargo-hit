import { Check } from "lucide-react";
import SectionTitle from "./SectionTitle";

const items = [
  "Вантаж приїхав пошкодженим",
  'Перевізник каже "це не ми"',
  "Не знаєте, як діяти далі?",
  'Перевізник каже "це не ми"',
  "Страхова відмовляє",
  "Не знаєте, як діяти далі?",
];

export default function FamiliarSituation() {
  return (
    <section className="bg-white py-12 md:py-16 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Знайома ситуація?</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check className="text-[#2a9d4a] mt-0.5 shrink-0" size={20} strokeWidth={2.5} />
              <span className="text-gray-800 text-base">
                {item.includes('"це не ми"') ? (
                  <>Перевізник каже <span className="font-medium">"це не ми"</span></>
                ) : item.includes("Вантаж") ? (
                  <><span className="font-bold">Вантаж</span> приїхав пошкодженим</>
                ) : (
                  item
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
