import { readStore, writeStore, Joke } from "../../data.js";

export const getAllJokes = (): Joke[] => {
  return readStore().jokes;
};

export const addJoke = (title: string, user: string): Joke => {
  const store = readStore();
  const joke: Joke = { id: Date.now(), title, user };
  store.jokes.push(joke);
  writeStore(store);
  return joke;
};
