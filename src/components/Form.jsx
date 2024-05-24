import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required";
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    if (!formData.phoneNo) tempErrors.phoneNo = "Phone No. is required";
    if (!formData.country) tempErrors.country = "Country is required";
    if (!formData.city) tempErrors.city = "City is required";
    if (!formData.panNo) tempErrors.panNo = "Pan No. is required";
    if (!formData.aadharNo) tempErrors.aadharNo = "Aadhar No. is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success', { state: { formData } });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
      <form onSubmit={handleSubmit} noValidate>
        {['firstName', 'lastName', 'username', 'email', 'phoneNo', 'panNo', 'aadharNo'].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-gray-700">{field.split(/(?=[A-Z])/).join(' ')}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors[field] ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 px-3 py-2 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
          {errors.country && <p className="text-red-500 text-sm">{[errors.country]}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select City</option>
            {formData.country === "India" && <>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </>}
            {formData.country === "USA" && <>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
            </>}
            {formData.country === "Canada" && <>
              <option value="Toronto">Toronto</option>
              <option value="Vancouver">Vancouver</option>
            </>}
          </select>
          {errors.city && <p className="text-red-500 text-sm">{[errors.city]}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
          disabled={Object.keys(errors).length > 0}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
