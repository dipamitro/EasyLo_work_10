import React, { useEffect, useState } from 'react';

const FoodTableFatch = () => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    fetch('https://restaurantapi.bssoln.com/api/Food/datatable')
    // promice mane ektar por ekta kaj kore
    // Api er data guloke json a convert kore
      .then(response => response.json()) 
    //   shei jeson a data k khuje ane check Api
      .then(json => setEmployeeData(json.data))
      .finally(() => {
      })
  }, [])

  const handleDelete = (id) => {
    fetch(`https://restaurantapi.bssoln.com/api/Food/delete/${id}`, { method: 'DELETE' })
    setEmployeeData( employeeData.filter(employee => employee.id !== id))
    console.log(id)
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
    fetch(`https://restaurantapi.bssoln.com/api/Food/update/${id}`, { method: 'PUT' })
    setEmployeeData( employeeData.filter(employee => employee.id !== id))
    console.log(id)
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
      <h2>Food Table</h2>
      <table aria-busy="false"
                            aria-colcount={3}
                            className="table b-table table-striped table-hover table-bordered border mb-0">
     <thead>
          <tr>
            <th>Food ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discount Type</th>
            <th>Discount price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((food, i) => (
            <tr key={i}>
              <td  className="txteclio">{food.id}</td>
              <td className="txteclio"><img src={`https://restaurantapi.bssoln.com/images/food/${food.image}`}  alt="sdfsfd" /></td>
              <td className="txteclio">{food.name}</td>
              <td className="txteclio">{food.description}</td>
              <td className="txteclio">{food.price}</td>
              <td className="txteclio">{food.discountType}</td>
              <td className="txteclio">{food.discountPrice}</td>
              <td >
                
              <button
                        onClick={() => handleDelete(food.id)} >
                       <span  className='hovricone' >
              <svg className='redd' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></span>
                      </button>
                
            
        <button  style={{margin:"0px 20px"}}
                        onClick={() => handleEdit(food.id)} > <span className='hovricone' >
              <svg className='grent'  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></span> </button> </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};





export default FoodTableFatch;
