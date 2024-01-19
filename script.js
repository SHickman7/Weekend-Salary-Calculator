function onReady() {
    console.log("Javascript is working!");
}



function addEmployee (event){
  event.preventDefault();
  let tableElement = document.querySelector("tbody");
  let firstName = document.getElementById("firstNameInput");
  let lastName = document.getElementById("lastNameInput");
  let id = document.getElementById("idInput");
  let title = document.getElementById("titleInput");
  let annualSalary = document.getElementById("annualSalaryInput");


  tableElement.innerHTML += `
  <tr>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${id.value}</td>
    <td>${title.value}</td>
    <td>${annualSalary.value}</td>
    <td>
      <button onclick="deleteRow(event)">❌</button>
    </td>
  </tr>
`;
  firstName.value = "";
  


}

  onReady();