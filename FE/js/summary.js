window.onload = function () {
    companyData = JSON.parse(localStorage.getItem('companyData'));
    console.log(companyData);

    if (companyData) {
        const table = document.getElementById('summaryTable');
        const tbody = table.querySelector('tbody');

        const data = [
            { label: 'Company name', value: companyData.companyName },
            { label: 'IČO', value: companyData.ico },
            { label: 'Address:', value: companyData.address },
            { label: 'Phone Number:', value: companyData.phoneNumber },
            { label: 'Email:', value: companyData.email },
        ];
        data.forEach((item) => {
            const row = tbody.insertRow();
            const labelCell = row.insertCell();
            const valueCell = row.insertCell();
            labelCell.innerHTML = item.label;
            valueCell.innerHTML = item.value;
        });
    } else {
        alert('No saved data found!');
    }
};

let companyData;

function sendDataToBe() {
    const data = companyData
    fetch('http://localhost:8080/api/companyData', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => response.text())
        .then(data => {
            console.log(data)
            alert("Data was successfully posted to the backend!")
            location.href = 'index.html'

        })
        .catch(error => alert(error))
}