let marks = prompt("Enter the student's marks (between 0 and 100):");

if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 60 && marks <= 79) {
  console.log("Grade: B");
} else if (marks >= 50 && marks <= 59) {
  console.log("Grade: C");
} else if (marks >= 40 && marks <= 49) {
  console.log("Grade: D");
} else {
  console.log("Grade: E");
}




let speed = prompt("Enter the speed of the car:");

if (speed < 70) {
  console.log("Ok");
} else {
  let points = Math.floor((speed - 70) / 5);
  console.log("Points: " + points);
  
  if (points > 12) {
    console.log("License suspended");
  }
}




// KRA and NHIF rates
//As provided in the link below 
<>
    // KRA and NHIF rates
    //As provided in the link below 
    <a href="https://www.aren.co.ke/payroll/taxrates.htm">https://www.aren.co.ke/payroll/taxrates.htm</a><a href="https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye">https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye</a></>
const KRA_TAX_THRESHOLD = 24000;
const KRA_TAX_RATES = [
  {max: 12298, rate: 0.1},
  {max: 23885, rate: 0.15},
  {max: 35472, rate: 0.2},
  {max: 47059, rate: 0.25},
  {max: Infinity, rate: 0.3}
];
const NHIF_RATES = [
  {max: 5999, rate: 150},
  {max: 7999, rate: 300},
  {max: 11999, rate: 400},
  {max: 14999, rate: 500},
  {max: 19999, rate: 600},
  {max: 24999, rate: 750},
  {max: 29999, rate: 850},
  {max: 34999, rate: 900},
  {max: 39999, rate: 950},
  {max: 44999, rate: 1000},
  {max: 49999, rate: 1100},
  {max: 59999, rate: 1200},
  {max: 69999, rate: 1300},
  {max: 79999, rate: 1400},
  {max: 89999, rate: 1500},
  {max: 99999, rate: 1600},
  {max: 119999, rate: 1700},
  {max: 139999, rate: 1800},
  {max: 159999, rate: 1900},
  {max: 179999, rate: 2000},
  {max: 199999, rate: 2100},
  {max: 219999, rate: 2200},
  {max: 239999, rate: 2300},
  {max: 259999, rate: 2400},
  {max: 279999, rate: 2500},
  {max: 299999, rate: 2600},
  {max: Infinity, rate: 2700}
];

// Function to calculate the payee/tax
function calculatePayee(salary) {
  if (salary <= KRA_TAX_THRESHOLD) {
    return 0;
  }
  let taxableAmount = salary - KRA_TAX_THRESHOLD;
  let payee = 0;
  for (let i = 0; i < KRA_TAX_RATES.length; i++) {
    let rate = KRA_TAX_RATES[i].rate;
    let max = KRA_TAX_RATES[i].max;
    if (taxableAmount > max) {
      payee += (max * rate);
      taxableAmount -= max;
    } else {
      payee += (taxableAmount * rate);
      break;
    }
  }
  return payee;
}


// Function to calculate NHIF deductions
function calculateNHIF(salary) {
    for (let i = 0; i < NHIF_RATES.length; i++) {
      let max = NHIF_RATES[i].max;
      let rate = NHIF_RATES[i].rate;
      if (salary <= max) {
        return rate;
      }
    }
}
