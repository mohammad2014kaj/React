import React, { useState, useEffect } from 'react';
import './SASS.scss';

const MyForm = () => {
  const initialFormData = {
    name: '',
    age: '',
    email: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isValid, setIsValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Validate form when formData changes
    const validateForm = () => {
      const isNameValid = formData.name.trim() !== '';
      const isAgeValid = !isNaN(formData.age) && formData.age !== '';
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

      const isValid = isNameValid && isAgeValid && isEmailValid;
      setIsValid(isValid);
    };

    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setFormData(initialFormData);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Welcome</p>
      <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} /><br />
      <input type="number" placeholder="Age" name="age" value={formData.age} onChange={handleChange} /><br />
      <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} /><br />
      <input type="password" placeholder="Password" /><br />
      <input type="submit" value="Sign in" /><br />
      {showAlert && <div className="alert">Form submitted successfully!</div>}
      {isValid ? null : <div className="error">Please fill in all the fields correctly.</div>}
    </form>
  );
  
};

export default MyForm;
