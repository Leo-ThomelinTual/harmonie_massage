"use client";
import { faq } from "@/app/data/faq";
import { useState } from "react";

const Faq = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  return (
    <section className="w-full h-max p-3 relative">
      <div className="absolute -top-60" id="faq" />
      <p className="uppercase text-(--muted)">Faq</p>
      <h2 className="uppercase font-bold text-2xl md:text-3xl pb-3 border-b-2 border-(--muted)">
        Question fréquente
      </h2>
      {faq.map((f) => (
        <div
          key={f.id}
          onClick={() => setActiveId(f.id)}
          className="rounded-md gap-3 flex flex-col shadow-md p-5"
        >
          <h4 className="uppercase cursor-pointer text-xl">
            {f.questionTitle}
          </h4>
          {activeId === f.id ? <p>{f.questionAnswer}</p> : null}
        </div>
      ))}
    </section>
  );
};

export default Faq;
