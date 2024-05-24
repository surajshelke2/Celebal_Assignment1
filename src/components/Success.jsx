import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Form Submitted Successfully</h1>
      {formData ? (
        <div className="bg-white shadow-md rounded-lg p-4">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="mb-2">
              <strong className="text-gray-700">{key.split(/(?=[A-Z])/).join(' ')}:</strong> {value}
            </div>
          ))}
        </div>
      ) : (
        <p>No form data available.</p>
      )}
    </div>
  );
};

export default Success;
