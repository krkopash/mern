//partial 
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; 
pointPart.x = 10;

//required
interface Name{
    firstname: string;
    lastname?: string;
}
let fullName: Required<Name>={
    firstname: "hello",
    lastname: "hi"
};
console.log(fullName);

//record
const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};
console.log(nameAgeMap);

//omit
interface omitType{
    n1: string;
    n2: number;
    n3?: string;
}
let omitTy: Omit<omitType, 'n2'| 'n3'>={
    n1: 'hello'
};
console.log(omitTy);

//pick
interface pickType {
    p1: string;
    p2: number;
    p3?: number;
}
const pickTy: Pick<pickType, 'p1'> = {
    p1: 'hello'
};
console.log(pickTy);

//exclude
type Primitive = string | number | boolean;
const value: Exclude<Primitive, number> ="abc";
console.log(value);