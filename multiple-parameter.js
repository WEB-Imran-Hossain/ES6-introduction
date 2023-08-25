// function1 to print employee id
const printId = (employeeId) => {
  console.log("Printing EmployeeId:", employeeId);
};
//   printId(1234)

//function2 to print employee name
function printName(name) {
  console.log("Printing Name:", name);
}
//   printName('Imran')

//function3 to print email and designation among other info.
const printOther = (email, designation) => {
  console.log(`Printing Email: ${email} ,Designation: ${designation}`);
};

//   printOther('webimran2021@gmail.com', 'web developer')

//function 4 is an higher order function that runs the functions being passed into it
const print = (funcA, funcB) => (param_ToFunctionB) =>
  funcA(funcB(param_ToFunctionB));

//printing the combination of above js functions
print(
  printId(24187),
  print(printName("Imran")),
  printOther("webimran2021@gmail.com", "web developer")
);
