import React, { useEffect, useState } from 'react';

const OrderFatch = () => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    fetch('https://restaurantapi.bssoln.com/api/Order/datatable')
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
          </tr>
        </thead>
        <tbody>
          {employeeData.map((food, i) => (
            <tr key={i}>
              <td  className="txteclio">{food.foodId}</td>
              <td className="txteclio">{food.orderNumber}</td>
              <td className="txteclio">{food.amount}</td>
              <td className="txteclio">{food.orderStatus}</td>
              <td className="txteclio">{food.orderTime}</td>
              <td className="txteclio">{food.discountType}</td>
              <td className="txteclio">{food.discountPrice}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};





export default OrderFatch;
 