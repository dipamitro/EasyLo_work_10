document.addEventListener("DOMContentLoaded", function () {
    const tblCustomers = document.getElementById("tblCustomers");
    const tbody = tblCustomers.getElementsByTagName("tbody")[0];
    const txtId = document.getElementById("txtId");
    const txtName = document.getElementById("txtName");
    const txtCountry = document.getElementById("txtCountry");
    const txtPhone = document.getElementById("txtPhone");
    const txtEmail = document.getElementById("txtEmail");
    const hfRowIndex = document.getElementById("hfRowIndex");
    const btnAdd = document.getElementById("btnAdd");
    const btnUpdate = document.getElementById("btnUpdate");
    const txtNamechange = document.getElementById('namechange');
    const txtemail1 = document.getElementById('email1');
    const txtphn1 = document.getElementById('phn1');
    const txtadd1 = document.getElementById('add1');
    const txteyage1 = document.getElementById('age1');

   
    let customers = [
                {
                    id: "38",
                    name: "Devoted",
                    country: "USA",
                    phone: "1234567890",
                    email: "devoted@example.com",
                },
                {
                    id: "32",
                    name: "Adoring",
                    country: "Canada",
                    phone: "9876543210",
                    email: "adoring@example.com",
                },
                {
                    id: "29",
                    name: "Arica",
                    country: "UK",
                    phone: "9876543210",
                    email: "louseg@example.com",
                },
            ];

    // Function to render the table rows from the array
    function renderTable() {
        tbody.innerHTML = "";
        customers.forEach(function (customer, index) {
            const edit = `<a class='edit btn btn-primary btn-sm' data-index="${index}">Edit</a>`;
            const del = `<a class='delete btn btn-danger btn-sm' data-index="${index}">Delete</a>`;
            const view = `<button type='button' class='btn view1 btn-sm viewclick btn-primary rounded-1 modal-button border border-1' data-bs-toggle='modal' data-bs-target='#exampleModal' data-index="${index}'>User</button>`;
            const table = `<tr><td>${customer.name}</td><td>${customer.id}</td><td>${customer.country}</td><td>${customer.phone}</td><td>${customer.email}</td><td>${edit}</td><td>${del}</td><td>${view}</td></tr>`;
            tbody.insertAdjacentHTML("beforeend", table);
        });
    }

    // Initial rendering of the table
    renderTable();

    btnAdd.addEventListener("click", function () {
        const id = txtId.value;
        const name = txtName.value;
        const country = txtCountry.value;
        const phone = txtPhone.value;
        const email = txtEmail.value;
        
        if (name === "" || country === "" || phone === "" || email === "") {
            alert("Fill Up the form!");
            return;
        }

        // Add the new customer to the array
        customers.push({ id, name, country, phone, email });

        // Render the updated table
        renderTable();

        // Clear the input fields
        Clear();
    });

    btnUpdate.addEventListener("click", function () {
        const name = txtName.value;
        const id = txtId.value;
        const country = txtCountry.value;
        const phone = txtPhone.value;
        const email = txtEmail.value;
        const rowIndex = hfRowIndex.value;

        customers[rowIndex] = { id, name, country, phone, email };

        // Render the updated table
        renderTable();

        btnAdd.style.display = "block";
        btnUpdate.style.display = "none";

        Clear();
    });

    tblCustomers.addEventListener("click", function (e) {
        const target = e.target;
        if (target.classList.contains("delete")) {
            if (confirm("Are you sure want to delete this record!")) {
                const index = target.dataset.index;
                customers.splice(index, 1);
                renderTable();
            }
        } else if (target.classList.contains("edit")) {
            const index = target.dataset.index;
            hfRowIndex.value = index;
            txtId.value = customers[index].id;
            txtName.value = customers[index].name;
            txtCountry.value = customers[index].country;
            txtPhone.value = customers[index].phone;
            txtEmail.value = customers[index].email;
            btnAdd.style.display = "none";
            btnUpdate.style.display = "block";
        } else if (target.classList.contains("view1")) {
            const index = target.dataset.index;
            hfRowIndex.value = index;
            txteyage1.innerHTML = customers[index].id;
            txtNamechange.innerText = customers[index].name;
            txtadd1.innerHTML = customers[index].country;
            txtphn1.innerHTML = customers[index].phone;
            txtemail1.innerHTML = customers[index].email;
        }
    });

    document.getElementById("btnClear").addEventListener("click", function () {
        Clear();
    });

    function Clear() {
        txtId.value = "";
        txtName.value = "";
        txtCountry.value = "";
        txtPhone.value = "";
        txtEmail.value = "";
        hfRowIndex.value = "";
    }
});