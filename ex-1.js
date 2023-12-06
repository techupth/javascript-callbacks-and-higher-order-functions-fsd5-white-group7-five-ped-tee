// Exercise #1: For Each Function

function forEach(array, operation) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(operation(array[i]));
  }
  console.log(result)
  return result;
}
function calNewEmpSal(valure) {
  return valure + 5000;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
for (let i = 0; i < forEach(employeeSalaries, calNewEmpSal).length; i++) {
  newEmployeeSalaries.push(forEach(employeeSalaries, calNewEmpSal)[i]);
}

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
