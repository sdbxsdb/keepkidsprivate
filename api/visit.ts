import { Redis } from '@upstash/redis'

export const config = { runtime: 'edge' }

const COUNTER_KEY = 'kkp:visitors'

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  return new Redis({ url, token })
}

export default async function handler(request: Request) {
  const redis = getRedis()

  if (!redis) {
    console.warn('[visit] counter unavailable — set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN')
    return Response.json({ count: null }, { status: 503 })
  }

  try {
    if (request.method === 'POST') {
      const count = await redis.incr(COUNTER_KEY)
      console.log(
        JSON.stringify({
          event: 'visit',
          count,
          at: new Date().toISOString(),
        }),
      )
      return Response.json({ count })
    }

    const count = await redis.get<number>(COUNTER_KEY)
    return Response.json({ count: count ?? 0 })
  } catch (error) {
    console.error('[visit] counter error', error)
    return Response.json({ count: null }, { status: 500 })
  }
}
