import React, { useEffect, useState } from 'react';

const TableNoWithEmplyee = () => {
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
      <h2>Table</h2>
      <table  className="table b-table table-striped table-hover table-bordered border mb-0">
        <thead>
          <tr>
            <th>TableId</th>
            <th>Table Number</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((table, i) => (
            <tr key={i}>
              <td>{table.table.tableId}</td>
              <td>{table.table.tableNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default TableNoWithEmplyee;