//numeric enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// enum Direction { //bydefault start from 0
//     Up=6,
//     Down=8,
//     Left=3,
//     Right=9
// }
var move = Direction.Up;
console.log(move);
//string enums
var student;
(function (student) {
    student["fisrt"] = "UP";
    student["second"] = "DOWN";
    student["third"] = "LEFT";
    student["forth"] = "RIGHT";
})(student || (student = {}));
var info = student.third;
console.log(info);
//Heterogeneous Enums
