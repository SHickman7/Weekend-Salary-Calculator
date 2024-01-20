function onReady() {
    console.log("Javascript is working!");
}
onReady();


function addEmployee(event){
  
  event.preventDefault();
  console.log("Did this work?");

  let tableElement = document.querySelector("tbody");

  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let id = document.getElementById("id");
  let title = document.getElementById("title");
  let annualSalary = document.getElementById("annualSalary");

  
  // Adding employee row when submit is clicked
  tableElement.innerHTML += `
  <tr>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${id.value}</td>
    <td>${title.value}</td>
    <td>${annualSalary.value}</td>
    <td>
      <button onclick="deleteRow(event)">Delete</button>
    </td>
  </tr>
`;
  
  firstName.value = "";
  lastName.value = "";
  id.value = "";
  title.value = "";
  annualSalary.value = "";


}

function deleteRow (event){
  event.target.parentElement.parentElement.remove();

}
