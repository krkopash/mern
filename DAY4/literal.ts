//String Literal Types
type Direction = "Up" | "Down" | "Left" | "Right";
var move: Direction;
move = "Up";
// move = "Forward"; ----error
console.log(move);

//numeric literal
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
function rollDice(): DiceRoll {
  return 4; // Valid
  // return 7; ----error
}
console.log(rollDice());

//boolean lterals
type Success = true;
function operation(): Success {
    return true; // Valid return value
    // return false; // Error
}
console.log(operation());