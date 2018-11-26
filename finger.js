// - Pick two numbers between 6 and 10

var args = process.argv;
console.log(args);

//  - Mapping numbers to each hand following these order:
// #  - 6 -> thumb
// #  - 7 -> index
// #  - 8 -> middle
// #  - 9 -> ringer
// #  - 10 -> pinky

var leftHand = args[2]
var rightHand = args[3]
console.log("Left Hand: ", leftHand)
console.log("Right Hand: ", rightHand)

// #- Group all fingers that are up to the "mapped" finger
// #- Repeat for the second number on the other hand
// #- Join the mapped fingers, count them and multiply by 10
// #- Take the leftover fingers from each hand and multiply left by right
// #- Add up the mapped x 10 value with the leftover multiplication
// #- Done... this should be the result

