import fs from "fs";
import path from "path";

export type Joke = {
  id: number;
  title: string;
  user: string;
};

type Store = {
  jokes: Joke[];
  activity: Record<string, string[]>;
};

const filePath = path.join(process.cwd(), "src/storage/jokes.json");

export const readStore = (): Store => {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

export const writeStore = (store: Store) => {
  fs.writeFileSync(filePath, JSON.stringify(store, null, 2));
};