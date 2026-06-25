import { type ReactNode } from 'react'
import {
  EXAMPLE_POST,
  PHOTO_HOTSPOTS,
  POST_MARKERS,
} from '../../content/copy'
import { ExampleImage } from './ExampleImage'
import {
  IconDots,
  IconMessageCircle,
  IconShare,
  IconThumbUp,
  IconWorld,
} from '@tabler/icons-react'

function MarkerBadge({ n, className = '' }: { n: number; className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center min-w-[18px] h-[18px] px-0.5 rounded-full bg-[#e7a33e] text-[10px] font-bold text-[#1c1e21] ring-2 ring-white shadow-sm flex-shrink-0 ${className}`}
    >
      {n}
    </span>
  )
}

/** Inline highlight + trailing number */
function MarkedText({ n, children }: { n: number; children: ReactNode }) {
  return (
    <span className="inline items-baseline gap-1">
      <span className="bg-[#fff3cd] text-[#050505] px-0.5 rounded-sm box-decoration-clone">
        {children}
      </span>
      <MarkerBadge n={n} className="w-4 h-4 text-[9px] min-w-[16px] align-middle" />
    </span>
  )
}

interface FacebookFeedPostProps {
  /** Show numbered PII markers — off for “innocent” section 1 */
  showMarkers?: boolean
  showLegend?: boolean
}

export function FacebookFeedPost({
  showMarkers = false,
  showLegend = true,
}: FacebookFeedPostProps) {
  const { captionMarkers } = EXAMPLE_POST

  const photoLegend = PHOTO_HOTSPOTS.map((spot, i) => ({
    number: i + 1,
    label: spot.label,
  }))

  const postLegend = POST_MARKERS.map((m) => ({
    number: m.number,
    label: m.label,
  }))

  return (
    <div className="w-full max-w-[420px] mx-auto">
      {/* Facebook mobile feed shell */}
      <div className="rounded-xl bg-[#f0f2f5] overflow-hidden shadow-2xl ring-1 ring-black/10">
        <article className="bg-white mx-0" aria-label="Example social media post in a feed">
          {/* Header */}
          <header className="flex items-start gap-2 px-3 pt-3 pb-2">
            <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center flex-shrink-0 text-white text-sm font-bold shadow-sm">
              {EXAMPLE_POST.authorInitials}
            </div>
            <div className="flex-1 min-w-0 pt-0.5">
              <div className="flex items-center flex-wrap gap-x-1.5 gap-y-1">
                <span className="text-[15px] font-semibold text-[#050505] leading-tight">
                  {EXAMPLE_POST.author}
                </span>
                {showMarkers && <MarkerBadge n={9} />}
              </div>
              <div className="flex items-center flex-wrap gap-x-1 mt-0.5 text-[13px] text-[#65676B]">
                <span>{EXAMPLE_POST.timeAgo}</span>
                <span aria-hidden="true">·</span>
                <span>{EXAMPLE_POST.audience}</span>
                {showMarkers && <MarkerBadge n={10} />}
                <span aria-hidden="true">·</span>
                <IconWorld size={12} stroke={2} aria-hidden="true" />
              </div>
            </div>
            <span className="p-1 text-[#65676B]" aria-hidden="true">
              <IconDots size={20} />
            </span>
          </header>

          {/* Caption */}
          <div className="px-3 pb-3 text-[15px] text-[#050505] leading-[1.35]">
            {showMarkers ? (
              <>
                <MarkedText n={11}>{captionMarkers.milestone}</MarkedText>
                {'! Can\u2019t believe '}
                <MarkedText n={12}>{captionMarkers.name}</MarkedText>
                {' is '}
                <MarkedText n={13}>{captionMarkers.age}</MarkedText>
                {' already. So proud of our '}
                <MarkedText n={14}>{captionMarkers.nickname}</MarkedText>
                {'. I used to '}
                <MarkedText n={16}>{captionMarkers.schoolRoute}</MarkedText>
                {', now she '}
                <MarkedText n={17}>{captionMarkers.unsupervised}</MarkedText>
                {' \u{1F979}'}
              </>
            ) : (
              EXAMPLE_POST.caption
            )}
          </div>

          {/* Photo */}
          <div className="relative bg-[#f0f2f5]">
            <ExampleImage imageKey="sourcePost" className="w-full aspect-[4/3]" showPlaceholderLabel={false} />

            {showMarkers &&
              PHOTO_HOTSPOTS.map((spot, i) => (
                <div
                  key={spot.id}
                  className="absolute z-10 pointer-events-none"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: 'translate(-50%, -50%)' }}
                  aria-hidden="true"
                >
                  <MarkerBadge n={i + 1} className="relative ring-2 ring-white shadow-md" />
                </div>
              ))}
          </div>

          {/* Reactions row */}
          <div className="px-3 py-2.5 flex items-center justify-between text-[13px] text-[#65676B]">
            <div className="flex items-center gap-1.5">
              <span className="flex -space-x-1">
                <span className="w-[18px] h-[18px] rounded-full bg-[#1877F2] flex items-center justify-center ring-2 ring-white">
                  <IconThumbUp size={10} className="text-white" fill="white" />
                </span>
                <span className="w-[18px] h-[18px] rounded-full bg-[#f33e58] flex items-center justify-center ring-2 ring-white text-[9px] leading-none">
                  ❤️
                </span>
              </span>
              <span>{EXAMPLE_POST.reactions}</span>
            </div>
            <span>
              {EXAMPLE_POST.comments} comments · 3 shares
            </span>
          </div>

          <div className="mx-3 border-t border-[#dadde1]" />

          {/* Actions */}
          <div className="px-1 py-0.5 flex items-center justify-around">
            {[
              { icon: IconThumbUp, label: 'Like' },
              { icon: IconMessageCircle, label: 'Comment' },
              { icon: IconShare, label: 'Share' },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center justify-center gap-2 flex-1 py-2.5 text-[#65676B] text-[15px] font-semibold"
              >
                <Icon size={20} stroke={1.75} />
                {label}
              </span>
            ))}
          </div>

          <div className="mx-3 border-t border-[#dadde1]" />

          {/* Comment */}
          <div className="px-3 py-3 flex gap-2 items-start">
            <div className="w-8 h-8 rounded-full bg-[#7b68ee] flex-shrink-0 flex items-center justify-center text-white text-[11px] font-bold">
              JM
            </div>
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-start gap-1.5 max-w-full">
                <div className="bg-[#f0f2f5] rounded-2xl px-3 py-2">
                  <p className="text-[13px] font-semibold text-[#050505] leading-tight inline-flex items-center flex-wrap gap-x-1.5 gap-y-1">
                    <span>{EXAMPLE_POST.sampleComment.author}</span>
                    {showMarkers && (
                      <MarkerBadge n={15} className="w-4 h-4 text-[9px] min-w-[16px]" />
                    )}
                  </p>
                  <p className="text-[15px] text-[#050505] leading-snug mt-0.5">
                    {EXAMPLE_POST.sampleComment.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Legend — only when annotated */}
      {showMarkers && showLegend && (
        <div className="mt-6 grid sm:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              In the photo <span className="text-slate-500">(1–8)</span>
            </p>
            <ul className="flex flex-col gap-y-1.5">
              {photoLegend.map(({ number, label }) => (
                <li key={number} className="flex items-center gap-2 min-w-0">
                  <MarkerBadge n={number} className="w-4 h-4 text-[9px] min-w-[16px]" />
                  <span className="text-xs text-slate-300">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              In the post <span className="text-slate-500">(9–17)</span>
            </p>
            <ul className="flex flex-col gap-y-1.5">
              {postLegend.map(({ number, label }) => (
                <li key={number} className="flex items-center gap-2 min-w-0">
                  <MarkerBadge n={number} className="w-4 h-4 text-[9px] min-w-[16px]" />
                  <span className="text-xs text-slate-300">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
