import React, { useState } from 'react';

const ErrorTrigger = () => {
  const [shouldError, setShouldError] = useState(false);
  
  const triggerError = () => {
    setShouldError(true);
  };
  
  if (shouldError) {
    // This will cause an error when the component renders
    throw new Error("This is a test error!");
  }
  
  return (
    <div className="p-4 text-center mt-10">
      <h2 className="text-lg font-bold mb-4">Error Trigger Component</h2>
      <p className="mb-4">Click the button below to trigger an error</p>
      <button 
        onClick={triggerError}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
      >
        Trigger Error
      </button>
    </div>
  );
};

export default ErrorTrigger;
