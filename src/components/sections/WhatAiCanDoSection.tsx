import { INNOCENT_PHOTO_MISUSE } from "../../content/copy";
import { ExampleImage } from "../ui/ExampleImage";
import { IconAlertTriangle, IconPhoto } from "@tabler/icons-react";

export function WhatAiCanDoSection() {
  return (
    <section
      id="what-ai-can-do"
      className="section-padding border-t border-slate-800/50 bg-warm-glow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 max-w-2xl mx-auto">
          <p className="eyebrow mb-3">Looks innocent</p>
          <h2 className="section-heading mb-4">
            Easily edited. Impossible to undo.
          </h2>
          <p className="section-subheading">
            These are the kinds of photos parents post every day - then,
            strangers have the image.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {INNOCENT_PHOTO_MISUSE.map((example) => (
            <article
              key={example.id}
              className="card p-0 overflow-hidden flex flex-col"
            >
              <div className="relative">
                <ExampleImage
                  imageKey={example.imageKey}
                  className="aspect-[4/3] rounded-none border-0"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-navy-950/80 border border-slate-700 text-[11px] font-medium text-slate-300">
                  {example.scene}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-white">
                  {example.title}
                </h3>
                <p className="text-sm text-warm-300/90 leading-relaxed flex items-start gap-2">
                  <IconPhoto
                    size={16}
                    className="flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{example.misuseLine}</span>
                </p>
                <p className="text-sm text-slate-400 leading-relaxed flex items-start gap-2">
                  <IconAlertTriangle
                    size={16}
                    className="flex-shrink-0 mt-0.5 text-warm-500/80"
                    aria-hidden="true"
                  />
                  <span>{example.riskLine}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          The photo looks fine. The edit happens after you post — and it&apos;s
          impossible to undo.
        </p>
      </div>
    </section>
  );
}
