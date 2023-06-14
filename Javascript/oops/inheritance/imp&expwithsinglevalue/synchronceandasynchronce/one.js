let employees=[{id:101,name:"manasa",salary:45000},{id:102,name:"pooja",salary:55000}]
let createemployees=(emp)=>{
    setTimeout(()=> {
        employees.push(emp)
    
    },4000);
}
createEmployee = () => {
    setTimeout(() => {
        let rows=""
        for(emp of employees) {
            rows= rows +    `<tr>
                               <td>${emp.id}</td>
                               <td>${emp.name}</td>
                               <td>${emp.salary}</td>
        }
    })
} 