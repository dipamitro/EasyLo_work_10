import React, { useEffect, useState } from 'react';

const AllEmployeeList = () => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    fetch('https://restaurantapi.bssoln.com/api/Employee/datatable')
    // promice mane ektar por ekta kaj kore
    // Api er data guloke json a convert kore
      .then(response => response.json()) 
    //   shei jeson a data k khuje ane check Api
      .then(json => setEmployeeData(json.data))
      .finally(() => {
      })
  }, [])
  
  return (
    <div>
      <h2>Employee Table</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>ID</th>
            <th>NID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Username</th>
            <th>Email</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee, i) => (
            <tr key={i}>
              <td>{employee.user.image}</td>
              <td>{employee.user.id}</td>
              <td>{employee.user.nid}</td>
              <td>{employee.user.fullName}</td>
              <td>{employee.designation}</td>
              <td>{employee.user.userName}</td> {/* Update this line */}
              <td>{employee.user.email}</td>
              {/* Add more table cells for other data */}
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default AllEmployeeList;

