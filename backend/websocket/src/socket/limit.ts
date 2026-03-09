const data = new Map<string, { count: number; lastReset: number }>();

const limit = 2;
const time = 10000;

export function isRateLimited(userId: string) {
  const now = Date.now();
  const record = data.get(userId);

  if (!record) {
    data.set(userId, {count: 1, lastReset: now });
    return false;
  }
  if (now - record.lastReset > time) {
    data.set(userId, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= limit) {
    return true;
  }
  record.count += 1;
  return false;
}