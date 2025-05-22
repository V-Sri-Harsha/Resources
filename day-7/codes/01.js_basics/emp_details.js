let empName="Harsha";
let empId=232324;
let empAge=45;

//using innerhtml
// let details=`ID: ${empId} <br> Name: ${empName} <br> Age: ${empAge}`;
// document.getElementById("emp").innerHTML=details;

//uisng innerText
// let details=`ID: ${empId}\n Name: ${empName}\n Age:${empAge}`;
// document.getElementById("emp").innerText=details;


//using DOM

// let person = document.getElementById("emp");

// let Name = document.createElement("p");
// Name.innerText = `Name: ${empName}`;

// let Id = document.createElement("p");
// Id.innerText = `Id: ${empId}`;

// let Age = document.createElement("p");
// Age.innerText = `Age: ${empAge}`;

// person.appendChild(Name);
// person.appendChild(Id);
// person.appendChild(Age);


// let emp_id = 1001234;
// let emp_name = 'Sanjay Patil';
// let emp_sal = 85750.75;

// let emp_details = `
//   <ul>
//     <li>ID: ${emp_id}</li>
//     <li>NAME: ${emp_name}</li>
//     <li>SALARY: ${emp_sal}</li>
//   </ul>
// `;
// document.getElementById("emp_details").innerHTML = emp_details;

// let emp_id = 1001234;
// let emp_name = 'Sanjay Patil';
// let emp_sal = 85750.75;

// let emp_details = `
//   <table border="1" cellpadding="8">
//     <tr><th>ID</th><td>${emp_id}</td></tr>
//     <tr><th>NAME</th><td>${emp_name}</td></tr>
//     <tr><th>SALARY</th><td>${emp_sal}</td></tr>
//   </table>
// `;
// document.getElementById("emp_details").innerHTML = emp_details;


function showEmployeeDetails() {
    let emp_id = 1001234;
    let emp_name = 'Sanjay Patil';
    let emp_sal = 85750.75;

    let emp_details = `
      <ul>
        <li>ID: ${emp_id}</li>
        <li>NAME: ${emp_name}</li>
        <li>SALARY: ${emp_sal}</li>
      </ul>
    `;
    document.getElementById("emp_details").innerHTML = emp_details;
}
