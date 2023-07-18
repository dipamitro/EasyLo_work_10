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
    const txtNamechange = document.getElementById('namechange')
    const txtemail1 = document.getElementById('email1')
    const txtphn1 = document.getElementById('phn1')
    const txtadd1 = document.getElementById('add1')
    const txteyage1 = document.getElementById('age1')
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
              
          ];
     



    btnAdd.  addEventListener("click", function () {
      const id = txtId.value;
      const name = txtName.value;
      const country = txtCountry.value;
      const phone = txtPhone.value;
      const email = txtEmail.value;
      const edit = "<a class='edit btn btn-primary btn-sm'>Edit</a>";
      const del = "<a class='delete btn btn-danger btn-sm'>Delete</a>";
      // const view ="<a class='view btn btn-primary btn-sm'>View</a>"

      const view = "<button type='button' class='btn view1 btn-sm viewclick btn-primary  rounded-1  modal-button border border-1' data-bs-toggle='modal' data-bs-target='#exampleModal'>User</button>";


      const table = "<tr><td>" + name + "</td><td>" + id + "</td><td>" + country + "</td><td>" + phone + "</td><td>" + email + "</td><td>" +  edit + "</td><td>" + del + "</td><td>" + view + "</td></tr>";
      tbody.insertAdjacentHTML("beforeend", table);
      if (name === "" || country === "" || phone === "" || email ==="") {
        alert("Fill Up the form!");
        return;
      }
      txtId.value = "";
      txtName.value = "";
      txtCountry.value = "";
      txtPhone.value = "";
      txtEmail.value = "";
    });
  
    btnUpdate.addEventListener("click", function () {

      const name = txtName.value;
      const id = txtId.value;
      const country = txtCountry.value;
      const phone = txtPhone.value;
      const email = txtEmail.value;
      const rowIndex = hfRowIndex.value;
  
      tblCustomers.rows[rowIndex].cells[0].innerHTML = name;
      tblCustomers.rows[rowIndex].cells[2].innerHTML = country;
      tblCustomers.rows[rowIndex].cells[1].innerHTML = id;
      tblCustomers.rows[rowIndex].cells[3].innerHTML = phone;
      tblCustomers.rows[rowIndex].cells[4].innerHTML = email;
  
      btnAdd.style.display = "block";
      btnUpdate.style.display = "none";
  
      //Clear();
      console.log(customers)
    });
  

    tblCustomers.addEventListener("click", function (e) {
      const target = e.target;
      if (target.classList.contains("delete")) {
        if (confirm("Are you sure want to delete this record!")) {
          target.closest("tr").remove();
        }
      } 
      
      else if (target.classList.contains("edit")) {
        const row = target.closest("tr");
        hfRowIndex.value = row.rowIndex;
        txtId.value = row.cells[1].innerHTML;
        txtName.value = row.cells[0].innerHTML;
        txtCountry.value = row.cells[2].innerHTML;
        txtPhone.value = row.cells[3].innerHTML;
        txtEmail.value = row.cells[4].innerHTML;
        btnAdd.style.display = "none";
        btnUpdate.style.display = "block";
      }
      else if (target.classList.contains("view1")) {
        const row = target.closest("tr");
        hfRowIndex.value = row.rowIndex;
        txteyage1.innerHTML = row.cells[1].innerHTML;
        // txtNamechange.innerText = txtName.value;

        txtNamechange.innerText = row.cells[0].innerHTML;
        txtadd1.innerHTML = row.cells[2].innerHTML;
         txtphn1.innerHTML = row.cells[3].innerHTML;
         txtemail1.innerHTML = row.cells[4].innerHTML;
        // btnAdd.style.display = "none";
        // btnUpdate.style.display = "block";
      }
    });
    function Tabl() {
      tbody.innerHTML = "";
      customers.forEach(function (customer, index) {
          const edit = `<a class='edit btn btn-primary btn-sm' data-index="${index}">Edit</a>`;
          const del = `<a class='delete btn btn-danger btn-sm' data-index="${index}">Delete</a>`;
          const view = "<button type='button' class='btn view1 btn-sm viewclick btn-primary  rounded-1  modal-button border border-1' data-bs-toggle='modal' data-bs-target='#exampleModal'>User</button>";
          const table = `<tr><td>${customer.name}</td><td>${customer.id}</td><td>${customer.country}</td><td>${customer.phone}</td><td>${customer.email}</td><td>${edit}</td><td>${del}</td><td>${view}</td></tr>`;
          tbody.insertAdjacentHTML("beforeend", table);
      });
      console.log(customers)
  }
  Tabl();




    document.getElementById("btnClear").addEventListener("click", function () {
      Clear();
    });
  });
  
  function Clear() {
    txtId.value = "";
    txtName.value = "";
    txtCountry.value = "";
    txtPhone.value = "";
    txtEmail.value = "";
    hfRowIndex.value = "";
  }
  





















