window.onload = function () {

    const companyData = JSON.parse(localStorage.getItem('companyData'));

    if (companyData) {
        document.getElementById('companyName').value = companyData.companyName;
        document.getElementById('ico').value = companyData.ico;
        document.getElementById('address').value = companyData.address;
        document.getElementById('phoneNumber').value = companyData.phoneNumber;
        document.getElementById('email').value = companyData.email;
    }

    document.getElementById('companyName').addEventListener('input', saveFormData);
    document.getElementById('ico').addEventListener('input', saveFormData);
    document.getElementById('address').addEventListener('input', saveFormData);
    document.getElementById('phoneNumber').addEventListener('input', saveFormData);
    document.getElementById('email').addEventListener('input', saveFormData);

    const form = document.getElementById('kycForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Check if all required inputs are filled in correctly
        if (form.checkValidity()) {

            window.location.href = 'summary.html';
        } else {
            // Display error message or highlight missing required fields
            // ...
        }
    });
};

function saveFormData() {
    const companyName = document.getElementById('companyName').value;
    const ico = document.getElementById('ico').value;
    const address = document.getElementById('address').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const companyData = {
        companyName: companyName,
        ico: ico,
        address: address,
        phoneNumber: phoneNumber,
        email: email
    };
    localStorage.setItem('companyData', JSON.stringify(companyData));
}