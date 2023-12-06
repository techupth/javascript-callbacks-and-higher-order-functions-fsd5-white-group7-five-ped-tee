// // Exercise #1: For Each Function

// const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
// const newEmployeeSalaries = [];

// // Using `forEach` function here
// function forEach(array, operation) {
//   for (let i = 0; i < array.length; i++) {
//     const originalSalary = array[i];
//     const adjustedSalary = operation(originalSalary);
//     newEmployeeSalaries.push(adjustedSalary);
//   }
// }

// // กำหนด callback function สำหรับการเพิ่มรายได้ 5000
// function increaseSalaryBy5000(salary) {
//   return salary + 5000;
// }

// // ใช้ `forEach` function เพื่อปรับแต่งเงินเดือน

// //   [20005, 40000, 32000, 14500, 344000],+5000
// forEach(employeeSalaries, increaseSalaryBy5000);

// console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

function forEach(array, operation) {
  for (let i = 0; i < array.length; i++) {
    let newSalaries = operation(array[i]);
    newEmployeeSalaries.push(newSalaries);
  }
}
forEach(employeeSalaries, function add5000(a) {
  return a + 5000;
});

console.log(newEmployeeSalaries);
