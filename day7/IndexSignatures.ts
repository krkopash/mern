//String Dictionary
interface StringDictionary{
    [key: string]: string;
}

const names: StringDictionary = {
    firstName: "abc",
    lastName:"xyz"
};

console.log(names["lastName"]);

//Number Dictionary
interface NumberDictionary{
    [indexedDB: number]: string;
}

const ar: NumberDictionary = {
    0: "1",
    4: "12"
}
console.log(ar[0]);
console.log(ar[4]);

interface merge{
    [key: number]: string;
}

