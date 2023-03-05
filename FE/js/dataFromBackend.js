function getData() {
    return fetch("http://localhost:8080/api/companyData")
        .then((response) => response.json())
        .then((data) => { return data });
}

function showData() {
    getData().then((data) => {
        const tbody = document.getElementById("backEndDataTableTbody")
        tbody.innerHTML = ""

        if (data.data) {
            const table = document.getElementById("backendDataTable");
            const tr = document.createElement("tr")
            tr.setAttribute("id", "trId")
            document.getElementById("backEndDataTableTbody").appendChild(tr)
            const labels = ["Company name", "IČO", "Adrress", "Phone number", "Email"]

            labels.forEach(item => {
                const th = document.createElement("th")
                th.innerHTML = item
                tr.appendChild(th)
            })

            for (const dataObject of Object.values(data.data)) {
                const row = table.insertRow();
                for (const item in dataObject) {
                    const cell = row.insertCell();
                    cell.innerHTML = dataObject[item];
                }
            }
        }
    });
}