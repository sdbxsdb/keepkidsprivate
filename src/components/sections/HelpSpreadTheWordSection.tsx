import { useState } from "react";
import { IconShare2 } from "@tabler/icons-react";
import { SITE_NAME } from "../../content/copy";
import { useVisitorCount } from "../../hooks/useVisitorCount";

async function shareSite(): Promise<"shared" | "copied" | "failed"> {
  const url = window.location.href;
  const text =
    "A short site for parents on what strangers can learn from a child photo post — and what they can do with the image.";

  if (navigator.share) {
    try {
      await navigator.share({ title: SITE_NAME, text, url });
      return "shared";
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return "failed";
    }
  }

  try {
    await navigator.clipboard.writeText(url);
    return "copied";
  } catch {
    return "failed";
  }
}

export function HelpSpreadTheWordSection() {
  const { count, loading } = useVisitorCount();
  const [shareState, setShareState] = useState<"idle" | "copied" | "shared">(
    "idle"
  );

  const handleShare = async () => {
    const result = await shareSite();
    if (result === "copied") setShareState("copied");
    else if (result === "shared") setShareState("shared");
    setTimeout(() => setShareState("idle"), 2500);
  };

  const showCount = !loading && count != null && count > 100;

  const buttonLabel =
    shareState === "copied"
      ? "Link copied!"
      : shareState === "shared"
      ? "Thanks for sharing!"
      : "Share this info";

  return (
    <section
      id="help-spread-the-word"
      className="section-padding border-t border-slate-800/50 bg-warm-glow"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-heading mb-6">Help spread the word</h2>

        {showCount && (
          <p className="section-subheading mb-4">
            We&apos;ve helped inform{" "}
            <span
              className="text-warm-400 font-semibold tabular-nums"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {count.toLocaleString("en-GB")}
            </span>{" "}
            people.
          </p>
        )}

        <p className="text-sm text-slate-500 mb-8 leading-relaxed">
          Send this to parents, schools and parent groups you know.
        </p>

        <button
          type="button"
          onClick={() => void handleShare()}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-warm-500 text-navy-950 font-semibold rounded-xl hover:bg-warm-400 active:bg-warm-400 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 transition-colors duration-200 text-sm sm:text-base"
        >
          <IconShare2 size={18} aria-hidden="true" />
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}
