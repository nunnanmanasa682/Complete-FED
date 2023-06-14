let users=[{"id":1,"name":"May","email":"Franzen","gender":"mfranzen0@ca.gov"},
{"id":2,"name":"Johannah","email":"Sahnow","gender":"jsahnow1@hp.com"},
{"id":3,"name":"Edlin","email":"Ingleby","gender":"eingleby2@addtoany.com"},
{"id":4,"name":"Sara","email":"Brownsey","gender":"sbrownsey3@dion.ne.jp"},
{"id":5,"name":"Son","email":"Trethewey","gender":"strethewey4@imdb.com"},
{"id":6,"name":"Debby","email":"McIlwrath","gender":"dmcilwrath5@netvibes.com"},
{"id":7,"name":"Carola","email":"Vanyashkin","gender":"cvanyashkin6@plala.or.jp"},
{"id":8,"name":"Zachariah","email":"Merrien","gender":"zmerrien7@hibu.com"},
{"id":9,"name":"Gawen","email":"Crolly","gender":"gcrolly8@intel.com"},
{"id":10,"name":"Pedro","email":"Rosenzveig","gender":"prosenzveig9@huffingtonpost.com"}]
function displayUsers() {
    let rows = ""
    for (user of users) {
        rows = rows + `<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.gender.substr(0, 1)}</td>
                    </tr>`
    }
    document.getElementById('tbody_Data').innerHTML = rows
}