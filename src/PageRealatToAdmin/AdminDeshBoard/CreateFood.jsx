import React, { useState } from 'react';
import axios from 'axios';

function CreateFood() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    discountType: 0,
    discount: 0,
    discountPrice: 0,
    image: '',
    base64: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      discountType: e.target.discountType.value,
      discount: e.target.discount.value,
      discountPrice: e.target.discountPrice.value,
      image: '',
      base64: '',
    });
    console.log(formData)
    try {
      const response = await axios.post(
        'https://restaurantapi.bssoln.com/api/Food/create',
        formData
      );

      console.log('Response:', response.data);
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Create Food</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="discountType"
          placeholder="discountType"
          value={formData.discountType}
          onChange={handleChange}
        />
        <input
          type="number"
          name="discount"
          placeholder="discount"
          value={formData.discount}
          onChange={handleChange}
        />
        <input
          type="number"
          name="discountPrice"
          placeholder="discountPrice"
          value={formData.discountPrice}
          onChange={handleChange}
        />
         <input
          type="text"
          name="price"
          placeholder="price"
          value={formData.price}
          onChange={handleChange}
        />
         <input
          type="text"
          name="price"
          placeholder="price"
          value={formData.price}
          onChange={handleChange}
        />
        
        <button onSubmit={handleSubmit} type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateFood;
