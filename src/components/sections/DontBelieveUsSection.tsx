import { AI_DISCLOSURE, AI_DISCLOSURE_IMAGES } from "../../content/copy";
import { ExampleImage } from "../ui/ExampleImage";

export function DontBelieveUsSection() {
  return (
    <section
      id="dont-believe-us"
      className="section-padding border-t border-slate-800/50 bg-navy-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 max-w-2xl mx-auto">
          <p className="eyebrow mb-3">{AI_DISCLOSURE.eyebrow}</p>
          <h2 className="section-heading mb-6">{AI_DISCLOSURE.heading}</h2>
          <div className="max-w-4xl mx-auto mb-6">
            <ul className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-3">
              {AI_DISCLOSURE_IMAGES.map((imageKey) => (
                <li
                  key={imageKey}
                  className="relative overflow-hidden border border-slate-700/80 bg-slate-900"
                >
                  <ExampleImage
                    imageKey={imageKey}
                    className="aspect-square"
                    showPlaceholderLabel={false}
                  />
                  <span className="absolute bottom-0 inset-x-0 py-1 text-center text-[9px] sm:text-[10px] font-bold uppercase tracking-wide bg-navy-950/85 text-warm-400">
                    {AI_DISCLOSURE.imageBadge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 text-left sm:text-center">
            {AI_DISCLOSURE.body.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base sm:text-lg text-slate-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </header>
      </div>
    </section>
  );
}
