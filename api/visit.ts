import { Redis } from '@upstash/redis'

export const config = { runtime: 'edge' }

const COUNTER_KEY = 'kkp:visitors'

function getRedis() {
  try {
    return Redis.fromEnv()
  } catch {
    return null
  }
}

export default async function handler(request: Request) {
  const redis = getRedis()

  if (!redis) {
    console.warn(
      '[visit] counter unavailable — link Upstash KV/Redis to this project',
    )
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
