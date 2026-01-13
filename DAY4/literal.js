var move;
move = "Up";
// move = "Forward"; ----error
console.log(move);
function rollDice() {
    return 4; // Valid
    // return 7; ----error
}
console.log(rollDice());
function operation() {
    return true; // Valid return value
    // return false; // Error
}
console.log(operation());
