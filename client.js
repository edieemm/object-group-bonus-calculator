const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];



function bonusCalculator(employee) {
  let bonus = 0;
  if (employee.reviewRating <= 2) {
    bonus = 0;
  } else if (employee.reviewRating == 3) {
    bonus = 0.04;
  } else if (employee.reviewRating == 4) {
    bonus = 0.06;
  } else if (employee.reviewRating == 5) {
    bonus = 0.1;
  } //end if statement about rating
  if (employee.employeeNumber.length == 4) {
    bonus = bonus + (0.05);
  }// employee number conditional
  if (employee.annualSalary > 65000) {
    bonus = bonus - 0.01;
  } // employee salary conditional
  if (bonus > 0.13) {
    bonus = 0.13;
  } //end max bonus
  if (bonus < 0) {
    bonus = 0;
  } //end min bonus

  let totalBonus = bonus * employee.annualSalary;

  return {
    name: employee.name,
    bonusPercentage: bonus,
    totalCompensation: parseInt(employee.annualSalary) + totalBonus,
    totalBonus: Math.round(totalBonus)
  }
}// bonusCalculator end


for ( let i = 0; i < employees.length; i++ ){
  console.log(bonusCalculator(employees[i]));
}









// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
