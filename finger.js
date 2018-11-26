// - Pick two numbers between 6 and 10

var args = process.argv;
console.log(args);

//  - Mapping numbers to each hand following these order:
// #  - 6 -> thumb
// #  - 7 -> index
// #  - 8 -> middle
// #  - 9 -> ringer
// #  - 10 -> pinky

var leftHand = args[2];
var rightHand = args[3];
console.log("Left Hand: ", leftHand);
console.log("Right Hand: ", rightHand);

// #- Group all fingers that are up to the "mapped" finger

var leftGroup = leftHand - 5;

// #- Repeat for the second number on the other hand
var rightGroup = rightHand - 5;

// #- Join the mapped fingers, count them and multiply by 10
var groupedFingers = (leftGroup + rightGroup) * 10;
console.log("Grouped Fingers: ", groupedFingers)

// #- Take the leftover fingers from each hand and multiply left by right
var looseLeftFingers = 10 - leftHand;
var looseRightFingers = 10 - rightHand;

var looseFingers = looseLeftFingers * looseRightFingers;

console.log("Loose Figers: ", looseFingers);

// #- Add up the mapped x 10 value with the leftover multiplication
// #- Done... this should be the result

