import React, { useState } from "react"; //karon ami jeno state hook ta k use korte pari
import './App.css'

// import 'bootstrap/dist/css/bootstrap.css'
const Customersdataa = [
  {
    id: "26",
    name: "Jonas ",
    country: "India",
    phone: "9876543210",
    email: "louseg@drgrttgexample.com",
    age: 30,
  },
  {
    id: "27",
    name: "Arica",
    country: "Chenai",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "28",
    name: "Louis",
    country: "Czechia",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
 
  {
    id: "29",
    name: "Arica",
    country: "Bangladesh",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "79",
    name: "Samina",
    country: "Pakistan",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "1010",
    name: "Primaka lo",
    country: "Argentina",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "8",
    name: "Jonas alina",
    country: "UK",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
   { id: "1",
    name: "Jonas ",
    country: "India",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "2",
    name: "Arica",
    country: "Chenai",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "3",
    name: "Louis",
    country: "Czechia",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
 
  {
    id: "4",
    name: "Arica",
    country: "Bangladesh",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "5",
    name: "Samina",
    country: "Pakistan",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "6",
    name: "Primaka lo",
    country: "Argentina",
    phone: "9876543210",
    email: "lousdexample.com",
    age: 30,
  },
  {
    id: "7",
    name: "Jonas alina",
    country: "UK",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "86",
    name: "Arica",
    country: "Chenai",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "89",
    name: "Louis",
    country: "Czechia",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
 
  {
    id: "90",
    name: "Arica",
    country: "Bangladesh",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "91",
    name: "Samina",
    country: "Pakistan",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  { 
    id: "92",
    name: "Primaka lo",
    country: "Argentina",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "93",
    name: "Jonas alina",
    country: "UK",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
   { id: "94",
    name: "Jonas Ajslari ",
    country: "India",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "95",
    name: "Shahariar sayed",
    country: "Chenai",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "96",
    name: "Louis",
    country: "Czechia",
    phone: "9876543210",
    email: "lousegf56@example.com",
    age: 30,
  },
 
  {
    id: "97",
    name: "Arica AhasNoor" ,
    country: "Bangladesh",
    phone: "9876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "98",
    name: "Samina Tun Noor",
    country: "Pakistan",
    phone: "01712957375",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "99",
    name: "Primaka lo Shaid",
    country: "Argentina",
    phone: "+8809876543210",
    email: "louseg@example.com",
    age: 30,
  },
  {
    id: "100",
    name: "Jonas alina",
    country: "UK",
    phone: "9876543210",
    email: "louseg67hpoo@example.com",
    age: 30,
  },
];

function App() {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const [customers, setCustomers] = useState(Customersdataa);// State use kori karon eita change over time maintain update dynamiclly without changeing dom

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    phone: "",
    email: "",
    age: " ",
    
  });
  const [customerIdedit, setcustomerIdedit] = useState(null);
  const [customerIdvwId, setcustomerIdvwId] = useState(null);
// declation done by statusbar



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }); // speread oparator
    
    console.log(event);
   
  };
  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleAddCustomer = () => {
    if (formData.name && formData.country && formData.age) {
      const newCustomer = {
        id: String(Date.now()), 
        ...formData,

      };
      if (!emailRegex.test(newCustomer.email)) {
          alert('Invalid email address. Please enter a valid email.');
          return;
        }
      setCustomers([...customers, newCustomer]);
      setFormData({ name: "", country: "", phone: "", email: "", age: "" });
    }
    // const newCustomer = {
    //   id: String(Date.now()), // Generate unique ID based on date .now  for timestamp
    //   ...formData,

    // };
    // if (!emailRegex.test(newCustomer.email)) {
    //     alert('Invalid email address. Please enter a valid email.');
    //     return;
    //   }
    // setCustomers([...customers, newCustomer]);
    // setFormData({ name: "", country: "", phone: "", email: "", age: "" });
  
  };
  const handleClearCustomer = () => {
      setFormData({ name: "", country: "", phone: "", email: "", age: "" });
      setcustomerIdedit(null); 
    
  };

  const handleEditCustomer = (customerId) => {
    const customerToEdit = customers.find((customer) => customer.id === customerId);
    if (customerToEdit) {
      setcustomerIdedit(customerId);   
      setFormData({ ...customerToEdit }); //data gulufrom a ane
    }
  };
  const handleDeleteCustomer = (customerId) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== customerId);
    setCustomers(updatedCustomers);
  };

  const handleViewCustomer = (customerId) => {
    setcustomerIdvwId(customerId);
  };

  const closeViewModal = () => {
    setcustomerIdvwId(null);
  };

  const handleUpdateCustomer = () => {
    if (formData.name && formData.country && formData.age) {
      const updatedCustomers = customers.map((customer) => {
        if (customer.id === customerIdedit) {
          return formData;
        }
        return customer;
      });
      setCustomers(updatedCustomers);
      setFormData({ name: "", country: "", phone: "", email: "", age: "" });
      setcustomerIdedit(null);
    }
  };
  //sorted by nam
  const sortedCustomers = customers.sort((a, b) => a.name.localeCompare(b.name));

  return (
   <div >
      {/* <h1 style={{textAlign:"center",margin:"20px"}}>Customer Management App</h1> */}
     <div style={{display: 'flex'}}>
      
      <div style={{height:'100vh'}}  >
      <div >
        {/* <h2 style={{marginTop:"0px"}}>Customers List</h2> */}
        <table>
          <thead>
            <tr style={{position: 'relative'}}>
              <th style={{float:"left",marginLeft:'35px',marginTop:'10px'}}>Name</th>
              <th style={{position:'absolute',left:'153px',top:'10px'}}>Country</th>
              <th style={{position:'absolute',left:'268px',top:'10px'}}>Phone</th>
              <th style={{position:'absolute',left:'450px',top:'10px'}}>Email</th>
              <th style={{position:'absolute',left:'582px',top:'10px'}}>Age</th>
              <th style={{position:'absolute',left:'702px',top:'10px'}}>Actions</th>
            </tr>
          </thead>
          <div style={{height:"85vh",width:"57vw",boxSizing:"content-box",overflow:'auto'}}>
          <tbody style={{width:'72vw'}} >
            {customers.map((customer) => (
              <tr style={{borderBottom: '1px solid black',}} key={customer.id}>
                <td style={{padding:"0px 6px"}}>{customer.name}</td>
                <td style={{padding:"0px 6px"}}>{customer.country} </td>
                <td style={{padding:"0px 6px"}}>{customer.phone}  </td>
                <td style={{padding:"0px 6px"}}>{customer.email}  </td>
                <td style={{padding:"0px 6px"}}>{customer.age} </td>
                <td>
                  <button style={{backgroundColor:"#007BFF",color:"white",padding:"5px 12px",marginLeft:'11px'}} onClick={() => handleEditCustomer(customer.id)}>
                    Edit
                  </button>
                  <button style={{backgroundColor:'#DC3545',color:"white",padding:"5px 12px",marginLeft:'11px'}} onClick={() => handleDeleteCustomer(customer.id)}>
                    Delete
                  </button>
                  <button style={{backgroundColor:"#007BFF",color:"white",padding:"5px 12px",marginLeft:'11px'}}  onClick={() => handleViewCustomer(customer.id)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          </div>
        </table>
      </div>
      </div>
      <div style={{marginLeft:"40px",width:"430px",height:'100vh'}} >
      <h1>Register</h1>
       <div className="form-group">
       <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
       </div>
       <div className="form-group">
       <label htmlFor="">Country</label>
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleInputChange}
        />
       </div>
      <div className="form-group">
      <label htmlFor="">Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
    <div className="form-group">
    <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
    </div>
    <div className="form-group">
    <label htmlFor="">Age</label>
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleInputChange}
        />
    </div>
        {customerIdedit ? (
          <button type="submit" style={{backgroundColor:'#0B5ED7',color:'white',marginLeft:'230px'}}  onClick={handleUpdateCustomer}>Update</button>
        ) : (
          <button style={{backgroundColor:'#0B5ED7',color:'white',marginLeft:'230px'}}  onClick={handleAddCustomer}>Add</button>
        )}
        <button style={{backgroundColor:'#FFCA2C',float:'right'}} onClick={handleClearCustomer}>Clear</button>
         {/* Modal customer data */}
      {customerIdvwId && (
        <div className="modal">
          <div className="modal-content">
           
            <h2>Customer Details</h2>
            <p>ID: {customerIdvwId}</p>
            {customers.map((customer) =>
              customer.id === customerIdvwId ? (
                <React.Fragment key={customer.id}>
                  <p>Name: {customer.name}</p>
                  <p>Country: {customer.country}</p>
                  <p>Phone: {customer.phone}</p>
                  <p>Email: {customer.email}</p>
                  <p>Age: {customer.age}</p>
                </React.Fragment>
              ) : null
            )}
             <span style={{backgroundColor:'#FFCA2C',padding:'6px 10px',borderRadius:'5px'}} className="close" onClick={closeViewModal}>
              Close
            </span>
          </div>
        </div>
      )}
      </div>

     
    </div>

    
   </div>
  );
}

export default App;
