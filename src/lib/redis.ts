import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://crucial-krill-33249.upstash.io',
  token: process.env.REDIS_KEY!,
})