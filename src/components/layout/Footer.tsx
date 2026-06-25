import { SITE_NAME } from "../../content/copy";

export function Footer() {
  return (
    <footer
      className="border-t border-slate-800 bg-navy-900/50"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="font-semibold text-white mb-3">{SITE_NAME}</p>
        <p className="text-sm text-slate-400 leading-relaxed max-w-xl mb-3">
          An educational site showing parents what strangers can learn from a
          post — and what they can do with a child&apos;s photo.
        </p>
        <p className="text-xs text-slate-500">
          All example imagery is AI-generated. No real children are shown on
          this site.
        </p>
      </div>
    </footer>
  );
}
