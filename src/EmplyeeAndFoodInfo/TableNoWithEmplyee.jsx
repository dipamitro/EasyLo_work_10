import React, { useEffect, useState } from "react";

const TableNoWithEmplyee = () => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    fetch("https://restaurantapi.bssoln.com/api/Table/datatable")
      // promice mane ektar por ekta kaj kore
      // Api er data guloke json a convert kore
      .then((response) => response.json())
      //   shei jeson a data k khuje ane check Api
      .then((json) => setEmployeeData(json.data))
      .finally(() => {});
  }, []);
  const handleDelete = (id) => {
    fetch(`https://restaurantapi.bssoln.com/api/Table/delete/${id}`, {
      method: "DELETE",
    });
    setEmployeeData(employeeData.filter((employee) => employee.id !== id));
    console.log(id);
    // .then(response => response.json())
    // .then((data) => {
    //     if (data.acknowledged) {
    //       console.log("Employee deleted successfully");

    //     } else {
    //       console.error("Failed to delete employee.");
    //     }
    //   })
    // .catch((error) => {
    //   console.error("Error:", error);
    // });
  };

  const handleEdit = (id) => {
    fetch(`https://restaurantapi.bssoln.com/api/Table/update/${id}`, {
      method: "PUT",
    });
    setEmployeeData(employeeData.filter((employee) => employee.id !== id));
    console.log(id);
    // .then(response => response.json())
    // .then((data) => {
    //     if (data.acknowledged) {
    //       console.log("Employee deleted successfully");

    //     } else {
    //       console.error("Failed to delete employee.");
    //     }
    //   })
    // .catch((error) => {
    //   console.error("Error:", error);
    // });
  };

  return (
    <div>
      <h2>Table</h2>
      <table className="table b-table table-striped table-hover table-bordered border mb-0">
        <thead>
          <tr>
            <th>TableId</th>
            <th>Table Image</th>
            <th>Seat</th>
            <th>Booking States</th>
            
            <th>Who Serve Here</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((table, i) => (
            <tr key={i}>
              <td>{table.tableNumber}</td>

              <td className="txtecli"><img src={`https://restaurantapi.bssoln.com/images/table/${table.image}`}  alt="sdfsfd" /></td>

             
              <td>{table.numberOfSeats}</td>
              <td>{table.isOccupied===false ?(
        <span className="green1"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></span>
      ) : (
       <span className="red22"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></span>
      )}</td>
  <td>
  
      
        
          {/* <p>Table Number: {table.tableNumber}</p> */}
          {table.employees.length > 0 ? (
            <div>
              {/* <p>Employee Name at this table:</p> */}
              <ul style={{color:'#3AC18C',fontSize:'15px'}} >
                {table.employees.map(employee => (
                  <li key={employee.employeeId}>{employee.name}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No employee at this table.</p>
          )}
        
     
  
  </td>
              {/* <td className="txteclio">
                {employeeData.map((item, j) => (
                  <span key={j}>{item.employees.name} </span>
                ))}
              </td> */}
              <td className="txteclio">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 640 512"
                  >
                    <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                  </svg>
                </button>

                <button
                  style={{ margin: "0px 20px" }}
                  onClick={() => handleDelete(food.id)}
                >
                  <span className="hovricone">
                    <svg
                      className="redd"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                    </svg>
                  </span>
                </button>

                <button
                  style={{ margin: "0px 20px" }}
                  onClick={() => handleEdit(food.id)}
                >
                  {" "}
                  <span className="hovricone">
                    <svg
                      className="grent"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableNoWithEmplyee;
