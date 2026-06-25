import {
  CORE_MESSAGE,
  LEARN_FROM_POST,
  DO_WITH_IMAGE,
  PROFILE_LINES,
} from "../../content/copy";
import { FacebookFeedPost } from "../ui/FacebookFeedPost";
import { IconArrowRight, IconEye, IconPhoto } from "@tabler/icons-react";

function ThemeChipList({
  title,
  icon: Icon,
  items,
  variant,
}: {
  title: string;
  icon: typeof IconEye;
  items: string[];
  variant: "learn" | "image";
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4 justify-center flex-nowrap">
        <Icon
          size={18}
          className={`flex-shrink-0 ${variant === "learn" ? "text-sky-400" : "text-warm-400"}`}
          aria-hidden="true"
        />
        <p className="text-sm font-semibold text-white whitespace-nowrap">
          {title}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium border ${
              variant === "learn"
                ? "bg-sky-950/40 border-sky-800/50 text-sky-200"
                : "bg-warm-950/40 border-warm-800/50 text-warm-200"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function WhatYouPostedSection() {
  return (
    <section
      id="what-you-posted"
      className="section-padding border-t border-slate-800/50 bg-warm-glow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 max-w-4xl mx-auto">
          <p className="eyebrow mb-3">One post, many risks</p>
          <h2 className="section-heading mb-4 lg:whitespace-nowrap">
            What someone can learn from a single post
          </h2>
          <p className="section-subheading">{CORE_MESSAGE.bridge}</p>
        </header>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-8 xl:gap-10 max-w-6xl mx-auto items-start">
          <div className="min-w-0">
            <div className="mb-5">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 lg:whitespace-nowrap">
                What you think you posted
              </h3>
              <p className="text-sm text-slate-400">
                A proud moment. Just a photo and a caption.
              </p>
            </div>
            <FacebookFeedPost showMarkers={false} showLegend={false} />
          </div>

          <div
            className="hidden lg:flex items-center justify-center self-center pt-16 px-1"
            aria-hidden="true"
          >
            <IconArrowRight size={32} className="text-warm-500/80" />
          </div>

          <div
            className="flex lg:hidden justify-center -my-1 col-span-full"
            aria-hidden="true"
          >
            <IconArrowRight size={28} className="text-warm-500 rotate-90" />
          </div>

          <div
            id="what-internet-sees"
            className="min-w-0 scroll-mt-24 lg:col-start-3"
          >
            <div className="mb-5">
              <h3 className="text-lg sm:text-xl font-semibold text-warm-300 mb-1 lg:whitespace-nowrap">
                What someone can take from it
              </h3>
              <p className="text-sm text-slate-400">
                Identity and location clues in the post and photo.
              </p>
            </div>
            <FacebookFeedPost showMarkers showLegend />
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-8 xl:gap-10">
          <ThemeChipList
            title={CORE_MESSAGE.learn}
            icon={IconEye}
            items={LEARN_FROM_POST}
            variant="learn"
          />
          <ThemeChipList
            title={CORE_MESSAGE.image}
            icon={IconPhoto}
            items={DO_WITH_IMAGE}
            variant="image"
          />
        </div>

        <div className="mt-12 space-y-3 text-center max-w-2xl mx-auto">
          {PROFILE_LINES.map((line) => (
            <p
              key={line}
              className="text-xl sm:text-2xl font-semibold text-warm-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
