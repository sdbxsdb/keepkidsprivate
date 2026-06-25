import { CORE_MESSAGE, TAGLINE } from "../../content/copy";
import { IconChevronDown } from "@tabler/icons-react";

export function HeroSection() {
  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative min-h-[calc(100dvh-72px)] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, rgba(212,165,116,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 20%, rgba(100,116,139,0.15) 0%, transparent 45%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="eyebrow mb-6">Before You Post</p>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.08] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {TAGLINE}
        </h1>

        <div className="space-y-4 max-w-2xl mx-auto mb-12">
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            You posted a cute photo with a proud caption.
          </p>
          <p className="text-base sm:text-lg text-sky-300/90 leading-relaxed">
            From the post, strangers can learn their name, age, school and where
            you live.
          </p>
          <p className="text-base sm:text-lg text-warm-300/90 leading-relaxed">
            From the photo, they get a clear face they can copy, fake and
            misuse.
          </p>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-medium">
            {CORE_MESSAGE.bridge}
          </p>
        </div>

        <div
          className="mt-12 flex justify-center text-slate-600"
          aria-hidden="true"
        >
          <IconChevronDown
            size={28}
            className="animate-bounce motion-reduce:animate-none"
          />
        </div>
      </div>
    </section>
  );
}
