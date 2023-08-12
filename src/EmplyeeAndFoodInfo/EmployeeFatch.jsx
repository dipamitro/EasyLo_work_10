import React, { useEffect, useState } from 'react';

const EmployeeFatch = () => {
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
      <table aria-busy="false"
                            aria-colcount={3}
                            className="table b-table table-striped table-hover table-bordered border mb-0">
     <thead role="rowgroup">
          <tr role="row">
            <th    role="columnheader"
                                  scope="col"
                                  aria-colindex={1}>Image</th>
            <th role="columnheader"
                                  scope="col"
                                  aria-colindex={2}>ID</th>
            <th role="columnheader"
                                  scope="col"
                                  aria-colindex={3}>NID</th>
            <th role="columnheader"
                                  scope="col"
                                  aria-colindex={4}>Name</th>
            <th role="columnheader"
                                  scope="col"
                                  aria-colindex={5}>Position</th>
            <th role="columnheader"
                                  scope="col"
                                  aria-colindex={6}>Username</th>
            <th role="columnheader"
                                  scope="col"
                                  aria-colindex={3}>Email</th>
            <th role="columnheader"
                                  scope="col"
                                  aria-colindex={4}>Action</th>
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
              <td></td>
              <td></td>
              {/* Add more table cells for other data */}
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default EmployeeFatch;

