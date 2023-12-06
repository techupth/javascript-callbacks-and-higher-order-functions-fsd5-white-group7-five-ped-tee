// Exercise #1: For Each Function
//สมมุติว่าบริษัทแห่งหนึ่งจะเพิ่มเงินเดือนให้กับพนักงานทุกคน 5000 บาทจากฐานเงินเดือนเดิมที่มีอยู่แล้ว โดยโจทย์กำหนดให้

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];
// // Using `forEach` function here
function forEach(array, operation) {
  for (let i = 0; i < array.length; i++) {
    const result = operation(array[i]);
    newEmployeeSalaries.push(result);
  }
  return newEmployeeSalaries;
}

forEach(employeeSalaries, function (addSalary) {
  return addSalary + 5000;
});
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
