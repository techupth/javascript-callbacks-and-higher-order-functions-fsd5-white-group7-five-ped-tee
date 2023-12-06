//Exercise #2: At Least Five Function
// สมมุติว่าโรงเรียนแห่งหนึ่งมีเป้าหมายที่จะสอบวัดระดับวิชาวิทยาศาสตร์คอมพิวเตอร์กับนักเรียนชั้นมัธยมศึกษาปีที่ 2 โดยแต่ละห้องมีคะแนนเป็นดังนี้
// ถ้า Return false คือหมายความว่า Array อันนี้มี Element น้อยกว่า 5 ตัวที่ตรงตามเงื่อนไขที่กำหนด

// ***check >70 เกิน 5 คน
function atLeastFive(array, operation) {
  if (operation(array) >= 5) {
    return true;
  } else {
    return false;
  }
}
//callback function here
function checkScoreMoreThan70(arrayScore) {
  let countMoreThan70 = 0;
  for (let i = 0; i < arrayScore.length; i++) {
    if (arrayScore[i] > 70) {
      countMoreThan70++;
    }
  }

  return countMoreThan70;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkScoreMoreThan70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkScoreMoreThan70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkScoreMoreThan70);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
