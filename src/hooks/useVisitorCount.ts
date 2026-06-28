import { useEffect, useState } from 'react'

const SESSION_KEY = 'kkp_visit_recorded'

let visitPromise: Promise<number | null> | null = null

async function loadVisitorCount(): Promise<number | null> {
  if (visitPromise) return visitPromise

  visitPromise = (async () => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        const res = await fetch('/api/visit')
        if (!res.ok) return null
        const data = (await res.json()) as { count: number | null }
        return typeof data.count === 'number' ? data.count : null
      }

      const res = await fetch('/api/visit', { method: 'POST' })
      if (!res.ok) {
        const fallback = await fetch('/api/visit')
        if (!fallback.ok) return null
        const data = (await fallback.json()) as { count: number | null }
        return typeof data.count === 'number' ? data.count : null
      }

      const data = (await res.json()) as { count: number }
      sessionStorage.setItem(SESSION_KEY, '1')
      return data.count
    } catch {
      return null
    }
  })()

  return visitPromise
}

export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    void loadVisitorCount().then((value) => {
      if (!cancelled && value != null) setCount(value)
      if (!cancelled) setLoading(false)
    })

    return () => {
      cancelled = true
    }
  }, [])

  return { count, loading }
}
