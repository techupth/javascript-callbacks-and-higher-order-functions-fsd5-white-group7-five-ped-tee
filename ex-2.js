//Exercise #2: At Least Five Function

// function atLeastFive(array, operation) {
//   const filteredArray = array.filter(operation);
//   return filteredArray.length >= 5;
// }

// const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
// const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
// const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// // กำหนด callback function เพื่อตรวจสอบ ถ้าคะแนนมากกว่า 70
// function scoreGreaterThan70(score) {
//   return score > 70;
// }

// // ใช้ `atLeastFive` function

// let scoreRoom1Result = atLeastFive(studentScoresRoom1, scoreGreaterThan70);
// let scoreRoom2Result = atLeastFive(studentScoresRoom2, scoreGreaterThan70);
// let scoreRoom3Result = atLeastFive(studentScoresRoom3, scoreGreaterThan70);

// console.log(scoreRoom1Result);
// console.log(scoreRoom2Result);
// console.log(scoreRoom3Result);

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

//นักเรียนอย่างน้อย5คนที่ได้คะแนนมากกว่า70คะแนน ต้องส่งค่าคะแนนเป็น true or false
function atLeastFive(array, operation) {
  if (operation(array) >= 5) {
    return true;
  } else {
    return false;
  }
}
function moreThanSeventy(score) {
  let smartStudent = 0;
  for (let i = 0; i < score.length; i++)
    if (score[i] > 70) {
      smartStudent++;
    }
  return smartStudent;
}
function moreThanSixty(score) {
  let smartStudent = 0;
  for (let i = 0; i < score.length; i++)
    if (score[i] > 60) {
      smartStudent++;
    }
  return smartStudent;
}

let scoreRoom1Result = atLeastFive(studentScoresRoom1, moreThanSeventy);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, moreThanSixty);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, moreThanSeventy);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);

console.log(moreThanSeventy(studentScoresRoom1));
console.log(atLeastFive(studentScoresRoom1, moreThanSeventy));
console.log(atLeastFive(studentScoresRoom2, moreThanSeventy));
console.log(atLeastFive(studentScoresRoom3, moreThanSeventy));
