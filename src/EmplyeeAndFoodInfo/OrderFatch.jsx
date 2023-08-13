import React, { useEffect, useState } from 'react';

const OrderFatch = () => {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    fetch('https://restaurantapi.bssoln.com/api/order/datatable')
    // promice mane ektar por ekta kaj kore
    // Api er data guloke json a convert kore
      .then(response => response.json()) 
    //   shei jeson a data k khuje ane check Api
      .then(json => setOrderData(json.data))
      .finally(() => {
      })
  }, [])
  
  return (
    <div>
      <h2>order Table</h2>
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
          {orderData.map((order, i) => (
            <tr key={i}>
              < td className="txteclio">{order.id}</td>
              < td className="txteclio">{order.orderNumber}</td>
              < td className="txteclio">{order.amount}</td>
              < td className="txteclio">{order.orderStatus}</td>
              < td className="txteclio">{order.orderTime}</td>
             
             
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default OrderFatch;

