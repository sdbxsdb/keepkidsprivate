import { type ReactNode, useCallback, useMemo, useState } from 'react'
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

const MARKER_LABELS: Record<number, string> = {}
PHOTO_HOTSPOTS.forEach((spot, i) => {
  MARKER_LABELS[i + 1] = spot.label
})
POST_MARKERS.forEach((marker) => {
  MARKER_LABELS[marker.number] = marker.label
})

function MarkerBadge({ n, className = '' }: { n: number; className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center min-w-[18px] h-[18px] px-0.5 rounded-full bg-[#e7a33e] text-[10px] font-bold text-[#1c1e21] ring-2 ring-white shadow-sm flex-shrink-0 ${className}`}
    >
      {n}
    </span>
  )
}

function MarkerPopoverToggle({
  n,
  label,
  active,
  onToggle,
  badgeClassName = '',
  className = '',
  popoverSide = 'right',
}: {
  n: number
  label: string
  active: boolean
  onToggle: (n: number) => void
  badgeClassName?: string
  className?: string
  popoverSide?: 'left' | 'right'
}) {
  return (
    <span className={`relative inline-flex align-middle ${className}`}>
      <button
        type="button"
        className="inline-flex cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e7a33e] focus-visible:ring-offset-1"
        aria-label={`${n}. ${label}`}
        aria-expanded={active}
        onClick={() => onToggle(n)}
      >
        <MarkerBadge
          n={n}
          className={`${active ? 'ring-[#e7a33e] ring-offset-1' : ''} ${badgeClassName}`.trim()}
        />
      </button>
      {active && (
        <span
          role="tooltip"
          className={`absolute z-50 w-max max-w-[200px] px-2.5 py-1.5 rounded-lg bg-[#fff3cd] text-[#050505] text-[11px] font-semibold leading-snug shadow-md ring-1 ring-[#e7a33e]/60 pointer-events-none ${
            popoverSide === 'right'
              ? 'left-full top-1/2 -translate-y-1/2 ml-1.5'
              : 'right-full top-1/2 -translate-y-1/2 mr-1.5'
          }`}
        >
          {label}
        </span>
      )}
    </span>
  )
}

function MarkerLegendToggle({
  n,
  label,
  active,
  onToggle,
  badgeClassName = '',
}: {
  n: number
  label: string
  active: boolean
  onToggle: (n: number) => void
  badgeClassName?: string
}) {
  return (
    <button
      type="button"
      className="inline-flex cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e7a33e] focus-visible:ring-offset-1"
      aria-label={`${n}. ${label}`}
      aria-expanded={active}
      onClick={() => onToggle(n)}
    >
      <MarkerBadge
        n={n}
        className={`${active ? 'ring-[#e7a33e] ring-offset-1' : ''} ${badgeClassName}`.trim()}
      />
    </button>
  )
}

/** Inline highlight + trailing number */
function MarkedText({
  n,
  label,
  active,
  onToggle,
  children,
}: {
  n: number
  label: string
  active: boolean
  onToggle: (n: number) => void
  children: ReactNode
}) {
  return (
    <span className="inline items-baseline gap-1">
      <span className="bg-[#fff3cd] text-[#050505] px-0.5 rounded-sm box-decoration-clone">
        {children}
      </span>
      <MarkerPopoverToggle
        n={n}
        label={label}
        active={active}
        onToggle={onToggle}
        badgeClassName="w-4 h-4 text-[9px] min-w-[16px]"
      />
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
  const [activeMarker, setActiveMarker] = useState<number | null>(null)
  const { captionMarkers } = EXAMPLE_POST

  const toggleMarker = useCallback((n: number) => {
    setActiveMarker((current) => (current === n ? null : n))
  }, [])

  const photoLegend = useMemo(
    () =>
      PHOTO_HOTSPOTS.map((spot, i) => ({
        number: i + 1,
        label: spot.label,
      })),
    [],
  )

  const postLegend = useMemo(
    () =>
      POST_MARKERS.map((m) => ({
        number: m.number,
        label: m.label,
      })),
    [],
  )

  const isActive = (n: number) => activeMarker === n

  return (
    <div className="w-full max-w-[420px] mx-auto">
      <div className="rounded-xl bg-[#f0f2f5] shadow-2xl ring-1 ring-black/10">
        <article className="bg-white mx-0 rounded-xl" aria-label="Example social media post in a feed">
          <header className="flex items-start gap-2 px-3 pt-3 pb-2 overflow-visible">
            <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center flex-shrink-0 text-white text-sm font-bold shadow-sm">
              {EXAMPLE_POST.authorInitials}
            </div>
            <div className="flex-1 min-w-0 pt-0.5">
              <div className="flex items-center flex-wrap gap-x-1.5 gap-y-1">
                <span className="text-[15px] font-semibold text-[#050505] leading-tight">
                  {EXAMPLE_POST.author}
                </span>
                {showMarkers && (
                  <MarkerPopoverToggle
                    n={9}
                    label={MARKER_LABELS[9]}
                    active={isActive(9)}
                    onToggle={toggleMarker}
                  />
                )}
              </div>
              <div className="flex items-center flex-wrap gap-x-1 mt-0.5 text-[13px] text-[#65676B]">
                <span>{EXAMPLE_POST.timeAgo}</span>
                <span aria-hidden="true">·</span>
                <span>{EXAMPLE_POST.audience}</span>
                {showMarkers && (
                  <MarkerPopoverToggle
                    n={10}
                    label={MARKER_LABELS[10]}
                    active={isActive(10)}
                    onToggle={toggleMarker}
                  />
                )}
                <span aria-hidden="true">·</span>
                <IconWorld size={12} stroke={2} aria-hidden="true" />
              </div>
            </div>
            <span className="p-1 text-[#65676B]" aria-hidden="true">
              <IconDots size={20} />
            </span>
          </header>

          <div className="px-3 pb-3 text-[15px] text-[#050505] leading-[1.35] overflow-visible">
            {showMarkers ? (
              <>
                <MarkedText n={11} label={MARKER_LABELS[11]} active={isActive(11)} onToggle={toggleMarker}>
                  {captionMarkers.milestone}
                </MarkedText>
                {'! Can\u2019t believe '}
                <MarkedText n={12} label={MARKER_LABELS[12]} active={isActive(12)} onToggle={toggleMarker}>
                  {captionMarkers.name}
                </MarkedText>
                {' is '}
                <MarkedText n={13} label={MARKER_LABELS[13]} active={isActive(13)} onToggle={toggleMarker}>
                  {captionMarkers.age}
                </MarkedText>
                {' already. So proud of our '}
                <MarkedText n={14} label={MARKER_LABELS[14]} active={isActive(14)} onToggle={toggleMarker}>
                  {captionMarkers.nickname}
                </MarkedText>
                {'. I used to '}
                <MarkedText n={16} label={MARKER_LABELS[16]} active={isActive(16)} onToggle={toggleMarker}>
                  {captionMarkers.schoolRoute}
                </MarkedText>
                {', now she '}
                <MarkedText n={17} label={MARKER_LABELS[17]} active={isActive(17)} onToggle={toggleMarker}>
                  {captionMarkers.unsupervised}
                </MarkedText>
                {' \u{1F979}'}
              </>
            ) : (
              EXAMPLE_POST.caption
            )}
          </div>

          <div className="relative bg-[#f0f2f5] overflow-visible">
            <ExampleImage imageKey="sourcePost" className="w-full aspect-[4/3]" showPlaceholderLabel={false} />

            {showMarkers &&
              PHOTO_HOTSPOTS.map((spot, i) => {
                const n = i + 1
                const popoverSide = spot.x > 65 ? 'left' : 'right'
                return (
                  <div
                    key={spot.id}
                    className="absolute z-10"
                    style={{
                      left: `${spot.x}%`,
                      top: `${spot.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <MarkerPopoverToggle
                      n={n}
                      label={spot.label}
                      active={isActive(n)}
                      onToggle={toggleMarker}
                      popoverSide={popoverSide}
                    />
                  </div>
                )
              })}
          </div>

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
                      <MarkerPopoverToggle
                        n={15}
                        label={MARKER_LABELS[15]}
                        active={isActive(15)}
                        onToggle={toggleMarker}
                        badgeClassName="w-4 h-4 text-[9px] min-w-[16px]"
                        popoverSide="left"
                      />
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

      {showMarkers && showLegend && (
        <div className="mt-6 grid sm:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              In the photo <span className="text-slate-500">(1–8)</span>
            </p>
            <ul className="flex flex-col gap-y-1.5">
              {photoLegend.map(({ number, label }) => (
                <li key={number} className="flex items-center gap-2 min-w-0">
                  <MarkerLegendToggle
                    n={number}
                    label={label}
                    active={isActive(number)}
                    onToggle={toggleMarker}
                    badgeClassName="w-4 h-4 text-[9px] min-w-[16px]"
                  />
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
                  <MarkerLegendToggle
                    n={number}
                    label={label}
                    active={isActive(number)}
                    onToggle={toggleMarker}
                    badgeClassName="w-4 h-4 text-[9px] min-w-[16px]"
                  />
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
