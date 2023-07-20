document.addEventListener("DOMContentLoaded", function () {
  const tblCustomers = document.getElementById("tblCustomers");
  const tbody = tblCustomers.getElementsByTagName("tbody")[0];
  const txtId = document.getElementById("txtId");
  const txtName = document.getElementById("txtName");
  const txtCountry = document.getElementById("txtCountry");
  const txtPhone = document.getElementById("phone");
  const txtEmail = document.getElementById("email");
  const hfRowIndex = document.getElementById("hfRowIndex");
  const btnAdd = document.getElementById("btnAdd");
  const btnUpdate = document.getElementById("btnUpdate");
  const txtNamechange = document.getElementById("namechange");
  const txtemail1 = document.getElementById("email1");
  const txtphn1 = document.getElementById("phn1");
  const txtadd1 = document.getElementById("add1");
  const txteyage1 = document.getElementById("age1");
  function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+.com$/;
    return emailRegex.test(email);
}
  // Initialize the array
  let customers = [
    {
      id: "38",
      name: "Devote Smit",
      country: "London,United Kingdom",
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
      name: "Wsdjfj",
      country: "Belgium",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "23",
      name: "Kricade",
      country: "London",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "28",
      name: "Ariimaka",
      country: "Pakistan",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "69",
      name: "Tipolicoha",
      country: "Europe",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "39",
      name: "Mashur",
      country: "America",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "69",
      name: "Harry",
      country: "Chaina",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "99",
      name: "Louis",
      country: " Airland",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "19",
      name: "Jonas",
      country: "India",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "29",
      name: "Arica",
      country: "Chenai",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "39",
      name: "Louis",
      country: "Czechia",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "89",
      name: "Arigato",
      country: "Germany",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "29",
      name: "Arica",
      country: "Bangladesh",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "79",
      name: "Samina",
      country: "Pakistan",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "29",
      name: "Primaka lo",
      country: "Argentina",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "89",
      name: "Jonas alina",
      country: "UK",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "89",
      name: "Bildla",
      country: "UK",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "89",
      name: "Camiliya",
      country: "UK",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "89",
      name: "Futulkiya",
      country: "UK",
      phone: "9876543210",
      email: "louseg@example.com",
    },
    {
      id: "89",
      name: "EggChicken",
      country: "UK",
      phone: "9876543210",
      email: "louseg@example.com",
    },
  ];
  function renderTable() {
    tbody.innerHTML = "";
    // customers.sort((a, b) =>  {
    //   const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    //   const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    //   if (nameA < nameB) {
    //     return -1;
    //   }
    //   if (nameA > nameB) {
    //     return 1;
    //   }
    
    //   // names must be equal
    //   return 0;
    // });
        //customers.sort;((a, b) => a.name.localeCompare(b.name).reverse);
    customers.sort((a, b) => a.name.localeCompare(b.name));
    // reverse
    // customers.sort((a, b) => b.name.localeCompare(a.name));
    customers.find((customer, index) => {
      const edit = `<a class='edit btn btn-primary btn-sm' data-index="${index}">Edit</a>`;
      const del = `<a class='delete btn btn-danger btn-sm' data-index="${index}">Delete</a>`;
      const view = `<button type='button' class='btn view1 btn-sm viewclick btn-primary rounded-1 modal-button border border-1' data-bs-toggle='modal' data-bs-target='#exampleModal'>User</button>`;
      const table = `<tr><td>${customer.name}</td><td>${customer.id}</td><td>${customer.country}</td><td>${customer.phone}</td><td>${customer.email}</td><td>${edit}</td><td>${del}</td><td>${view}</td></tr>`;
      tbody.insertAdjacentHTML("beforeend", table);
    });
    console.log(customers);
  }
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
    if (!isEmailValid(email)) {
      alert("Invalid email format! Please enter a valid email address.");
      return;
  }
    customers.push({ id, name, country, phone, email });
    renderTable();
    Clear();
  });
  btnUpdate.addEventListener("click", function () {
    const name = txtName.value;
    const id = txtId.value;
    const country = txtCountry.value;
    const phone = txtPhone.value;
    const email = txtEmail.value;
    const rowIndex = hfRowIndex.value;

    if (!isEmailValid(email)) {
      alert("Invalid email format! Please enter a valid email address.");
      return;
  }
    customers[rowIndex] = { id, name, country, phone, email };
    renderTable();
    btnAdd.style.display = "block";
    btnUpdate.style.display = "none";
    Clear();
    console.log(customers);
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
      const row = target.closest("tr");
      hfRowIndex.value = row.rowIndex;
      txteyage1.innerHTML = row.cells[1].innerHTML;
      txtNamechange.innerText = row.cells[0].innerHTML;
      txtadd1.innerHTML = row.cells[2].innerHTML;
      txtphn1.innerHTML = row.cells[3].innerHTML;
      txtemail1.innerHTML = row.cells[4].innerHTML;
    }
  });

  document.getElementById("btnClear").addEventListener("click", function () {
    Clear();
    btnAdd.style.display = "block";
    btnUpdate.style.display = "none";
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
