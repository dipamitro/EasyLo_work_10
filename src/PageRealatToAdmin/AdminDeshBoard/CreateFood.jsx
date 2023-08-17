import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
function CreateFood() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    discountType: '',
    discount: '',
    discountPrice: '',
    image: '',
    base64: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      discountType:e.target.discountType.value,
      discount: e.target.discount.value,
      discountPrice: e.target.discountPrice.value,
      image: '',
      base64: '',
    });
    console.log('Before',formData)
    try {
      const response = await axios.post(
        'https://restaurantapi.bssoln.com/api/Food/create',
        {
          name: formData.name,
          description: formData.description,
          price: formData.price,
          discountType:formData.discountType,
          discount: formData.discount,
          discountPrice: formData.discountPrice,
          image: '',
          base64: ''
        }
      );
      console.log('Response:', response.data);
    } catch (error)  {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: value,
    }));
  };

  return (
    <div>
      <h2>Create Food</h2>
      <form onSubmit={(e)=> handleSubmit(e)} >
      <label>
    Name:
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
         </label>
         <label>
Description:
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
         </label>
        

        <label>
          Price
        <input
          type="number"
          name="price"
          placeholder="price"
          value={formData.price}
          onChange={handleChange}
        />

        </label>
        <label htmlFor=""> DiscountType<input
          type="text"
          name="discountType"
          placeholder="discountType"
          value={formData.discountType}
          onChange={handleChange}
        /></label>
       <label htmlFor=""> discount
       <input
          type="number"
          name="discount"
          placeholder="discount"
          value={formData.discount}
          onChange={handleChange}
        />
       </label>
       <label htmlFor="">discountPrice</label>
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
          value={formData.image}
          onChange={handleChange}
        />
         <input
          type="text"
          name="price"
          placeholder="price"
          value={formData.base64}
          onChange={handleChange}
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

export default CreateFood;
