export type Activity = {
  time: string;
  method: string;
  path: string;
  status: number;
};

export const activityLog: Activity[] = [];
