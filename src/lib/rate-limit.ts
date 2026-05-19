import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "./redis";

function createLimiter(prefix: string, requests: number, window: string) {
  if (!redis) return null;
  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(requests, window as Parameters<typeof Ratelimit.slidingWindow>[1]),
    prefix,
  });
}

export const bookingLimiter = createLimiter("ratelimit:booking", 10, "1 h");
export const estimatorLimiter = createLimiter("ratelimit:estimator", 5, "1 h");
export const contactLimiter = createLimiter("ratelimit:contact", 5, "1 h");
export const loginLimiter = createLimiter("ratelimit:login", 5, "15 m");
