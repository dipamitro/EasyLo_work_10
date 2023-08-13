import React, { useEffect, useState } from 'react';

const FoodTableFatch = () => {
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://restaurantapi.bssoln.com/api/Food/datatable')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setFoodData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Food Table</h2>
      <table className="table b-table table-striped table-hover table-bordered border mb-0">
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
          {foodData.map(food => (
            <tr key={food.foodId}>
              <td  className="txteclio">{food.foodId}</td>
              <td className="txteclio">{food.image}</td>
              <td className="txteclio">{food.name}</td>
              <td className="txteclio">{food.description}</td>
              <td className="txteclio">{food.price}</td>
              <td className="txteclio">{food.discountType}</td>
              <td className="txteclio">{food.discountPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodTableFatch;
