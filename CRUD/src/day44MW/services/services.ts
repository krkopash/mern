import { readStore, writeStore } from "../../data";
import type { Joke } from "../../data";

export const getJoke=():Joke[]=>{
    return readStore().jokes;

}
export const addJoke=(title:string, user: string): Joke=>{           
    const store=readStore();
    const joke:Joke={id:Date.now(), title, user};
    store.jokes.push(joke);
    writeStore(store);
    return joke;


}
