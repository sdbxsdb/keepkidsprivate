import { useState } from 'react'
import { type ImageKey, SITE_IMAGES } from '../../content/copy'

interface ExampleImageProps {
  imageKey: ImageKey
  className?: string
  showPlaceholderLabel?: boolean
}

export function ExampleImage({
  imageKey,
  className = '',
  showPlaceholderLabel = true,
}: ExampleImageProps) {
  const config = SITE_IMAGES[imageKey]
  const src = `/images/${config.file}`
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`} role="img" aria-label={config.alt}>
      {(failed || !loaded) && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse motion-reduce:animate-none" aria-hidden="true" />
      )}
      {showPlaceholderLabel && failed && (
        <p className="absolute bottom-2 inset-x-0 text-center text-[10px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider z-10">
          Awaiting: {config.file}
        </p>
      )}
      {!failed && (
        <img
          src={src}
          alt={config.alt}
          className={`w-full h-full object-cover ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
