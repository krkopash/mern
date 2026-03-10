const rateLimit = new Map<string, { count: number; lastReset: number }>();

const limit = 2;
const time = 10000;

export function isRateLimited(userId: string) {
  const now = Date.now();
  const record = rateLimit.get(userId);

  if (!record) {
    rateLimit.set(userId, { count: 1, lastReset: now });
    return "Allowed";
  }

  if (now - record.lastReset > time) {
    rateLimit.set(userId, { count: 1, lastReset: now });
    return "Allowed";
  }

  if (record.count >= limit) {
    return "not allowed";
  }
  record.count += 1;
  return "allowed";
}