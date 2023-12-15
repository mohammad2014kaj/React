import React, { useState, useEffect } from 'react';

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

      setIsValid(isNameValid && isAgeValid && isEmailValid);
    };

    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // Simulate a successful submission
    // In a real application, you would handle the submission logic here
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setFormData(initialFormData);
    }, 3000);
  };

  return (
    <div>
      {showAlert && <div className="success-alert">Submit successful!</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>

        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>

        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
