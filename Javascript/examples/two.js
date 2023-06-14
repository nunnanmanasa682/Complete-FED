let employees= [
    {id:101,name:"manasa", salary:50000},
    {id:102,name:"pooja",salary:50000}
    
];
let createEmployee=(employee)=>{
    setTimeout(()=>{
employee.push(employee);
    },4000)
};
let getEmployee=()=>{
    setTimeout(()=>{
        let employeeRows="";
    employees.forEach((employee) => {
       employeeRows +=`<tr><td>${employee.id}</td>
       <td>${employee.name}</td>
       <td>${employee.salary}</td></tr>`;

    });
    document.querySelector("#table-body").innerHTML=employeeRows;
    },1000);

};
createEmployee({id:103,name:"Dheera",salary:50000});
getEmployee();
