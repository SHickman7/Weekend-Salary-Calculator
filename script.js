function onReady() {
    console.log("Javascript is working!");
}
onReady();

//creating a global variable for the the total monthly cost
let totalMonthlyCost = 0;

function addEmployee(event){
  
  event.preventDefault();
  console.log("Did this work?");

  let tableElement = document.querySelector("tbody");
  
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let id = document.getElementById("id").value;
  let title = document.getElementById("title").value;
  let annualSalary = document.getElementById("annualSalary").value;

  document.getElementById('firstName').value = "";
  document.getElementById('lastName').value = "";
  document.getElementById('id').value = "";
  document.getElementById('title').value = "";
  document.getElementById('annualSalary').value = "";


/* Create our number formatter.  Got this information from
  https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings */
  
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

let currencyStringAnnualSalary = formatter.format(annualSalary);
console.log ('Formatted annual salary:', currencyStringAnnualSalary);
console.log(typeof annualSalary);

  
  // Adding employee row to existing table element when submit is clicked
  tableElement.innerHTML += `
  <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>${currencyStringAnnualSalary}</td>
    <td>
      <button onclick="deleteRow(event)">Delete</button>
    </td>
  </tr>
`;
 

totalMonthlyCost += ((Number(annualSalary))/12);
//console.log ('Current value of total monthly cost', totalMonthlyCost);

totalMonthlyCost = Number(totalMonthlyCost);

console.log('Total Monthly cost:', totalMonthlyCost);



/* Display total monthly cost in USD format */
document.querySelector('footer').innerHTML = `Total Monthly: ${formatter.format(totalMonthlyCost)}`;

/* if the total monthly cost exceedds $20,000, we need to indicate this
    by changing the appearance of the footer */

    if(totalMonthlyCost > 20000){
      let footer = document.querySelector('footer');
      //console.log(footer);
      footer.classList.add('over-budget');
  }
  else{
      let footer = document.querySelector('footer');
  }

}



//function to delete entire employee row when delete button is clicked

function deleteRow (event){
  event.target.parentElement.parentElement.remove();

}
