import React, { useEffect, useState } from 'react';

const EmployeeWithTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    fetch('https://restaurantapi.bssoln.com/api/EmployeeTable/datatable')
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
      <h2>Employee Assing With Table</h2>
      <table  className="table b-table table-striped table-hover table-bordered border mb-0">
        <thead>
          <tr>
            <th>employeeId</th>
            <th>ID</th>
          
          
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee, i) => (
            <tr key={i}>
              <td>{employee.employee.employeeId}</td>
              <td>{employee.employee.name}</td>
              
              
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default EmployeeWithTable;