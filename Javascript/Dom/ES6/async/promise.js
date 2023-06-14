let employees=[{id:101,name:"manasa",sal:45000},{id:102,name:"pooja",sal:55000

}]
let createEmployees=(emp) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true;
            employees.push(emp)
            flag?resolve("data successfully inserted"):reject("failure")
               },[4000]);
    });
}
let getEmployees=() => {
    setTimeout(() => {
        let rows = ""
        for (emp of employees) {
            rows = rows + `<tr>
                                <td>${emp.id}</td>
                                <td>${emp.name}</td>
                                <td>${emp.sal}</td>
                            <tr>`
        }
        document.getElementById('abc').innerHTML = rows
    }, [1000])
}

createEmployees({id:103,name:"mani",sal:30000})
  .then((msg)=>{
    console.log(msg);
    getEmployees()
  })
  .catch((err) => {
console.log(err);
  })