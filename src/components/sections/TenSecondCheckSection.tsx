import {
  CORE_MESSAGE,
  NSPCC_PHOTO_GUIDANCE,
  SHARING_PRIVACY_TIPS,
} from "../../content/copy";
import { IconCheck, IconShieldCheck } from "@tabler/icons-react";

export function TenSecondCheckSection() {
  return (
    <section
      id="ten-second-check"
      className="section-padding border-t border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 max-w-2xl mx-auto">
          <p className="eyebrow mb-3">Before you hit post</p>
          <h2 className="section-heading mb-4">Share with people you trust</h2>
          <p className="section-subheading">
            You don&apos;t need to stop posting photos. Just stop showing the
            whole world.
          </p>
        </header>

        <ul className="space-y-3 max-w-2xl mx-auto">
          {SHARING_PRIVACY_TIPS.map((tip) => (
            <li
              key={tip}
              className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800"
            >
              <IconCheck
                size={18}
                className="text-emerald-400 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {tip}
              </p>
            </li>
          ))}
        </ul>

        <p className="text-center mt-10 text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
          The NSPCC has{" "}
          <a
            href={NSPCC_PHOTO_GUIDANCE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-400 hover:text-warm-300 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-400 rounded-sm"
          >
            guidance on reducing the risk of children&apos;s photos and videos
            being misused
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
    <section
      id="download"
      className="section-padding border-t border-slate-800/50 bg-warm-glow"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-heading mb-4">Before you post, pause.</h2>
        <p className="text-base text-slate-400 mb-4 leading-relaxed">
          {CORE_MESSAGE.bridge}
        </p>
        <p className="text-sm text-slate-500 mb-8">
          Share this with schools, nurseries and parent groups.
        </p>
      </div>
    </section>
  );
}
