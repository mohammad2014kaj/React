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
    <div className="container"> {/* استفاده از کلاس container */}
      {showAlert && <div className="success-alert">Submit successful!</div>} {/* استفاده از کلاس success-alert */}
      <form onSubmit={handleSubmit}>
        <label className="form-label"> {/* استفاده از کلاس form-label */}
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" /> {/* استفاده از کلاس form-input */}
        </label>

        <label className="form-label"> {/* استفاده از کلاس form-label */}
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} className="form-input" /> {/* استفاده از کلاس form-input */}
        </label>

        <label className="form-label"> {/* استفاده از کلاس form-label */}
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} className="form-input" /> {/* استفاده از کلاس form-input */}
        </label>

        <button type="submit" disabled={!isValid} className="submit-button btn"> {/* استفاده از کلاس submit-button */}
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;