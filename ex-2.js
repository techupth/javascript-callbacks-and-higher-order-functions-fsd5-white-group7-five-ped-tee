//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  if (operation(array) >= 5) {
    return true;
  } else return false;
}
function scoreThan70(array) {
  let than70 = 0;
  for (let i = 0; (i < array.length); i++) {
    if (array[i] >= 70) {
      than70++;
    }
  }
  console.log(than70)
  return than70
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, scoreThan70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, scoreThan70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, scoreThan70);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
