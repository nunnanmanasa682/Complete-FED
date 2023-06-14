let employees=[{"id":1,"name":"May","email":"Franzen"},
{"id":2,"name":"Johannah","email":"Sahnow"},
{"id":3,"name":"Edlin","email":"Ingleby"},
{"id":4,"name":"Sara","email":"Brownsey"},
{"id":5,"name":"Son","email":"Trethewey"},
{"id":6,"name":"Debby","email":"McIlwrath"},
{"id":7,"name":"Carola","email":"Vanyashkin"},
{"id":8,"name":"Zachariah","email":"Merrien"},
{"id":9,"name":"Gawen","email":"Crolly"},
{"id":10,"name":"Pedro","email":"Rosenzveig"}]
let display_Data = () => {
    let rows = ""
    employees.forEach((employee) => {
        rows = rows + `<tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                
            </tr>`
    })
    document.getElementById('tbody_Data').innerHTML=rows
}