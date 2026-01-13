//numeric enums
enum Direction { //bydefault start from 0
    Up,
    Down,
    Left,
    Right
}
// enum Direction { //bydefault start from 0
//     Up=6,
//     Down=8,
//     Left=3,
//     Right=9
// }
let move: Direction = Direction.Up;
console.log(move);

//string enums
enum student {
    fisrt = "UP",
    second = "DOWN",
    third = "LEFT",
    forth = "RIGHT"
}

let info: student = student.third;
console.log(info);

//Heterogeneous Enums